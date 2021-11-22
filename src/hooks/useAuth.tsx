import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { api } from "../services/api";
import { ethers } from "ethers";

type User = {
  created_at: string;
  id: string;
  nonce: string;
  walletAddress: string;
};

type AuthContextData = {
  user: User | null;
  isSignIn: boolean;
  handleSetLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
  supabase: any;
  loginState: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

declare let window: Window &
  typeof globalThis & {
    ethereum: any;
  };

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loginState, setLoginState] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  //   async function testUser() {
  //     const { data } = await supabase.from("users").select("*");
  //     console.log(data);
  //   }
  async function handleSetLogin() {
    setLoginState("connecting to your wallet");
    if (!window.ethereum) {
      setLoginState("No MetaMask wallet, please install it...");
      return;
    }
    setLoginState("connected");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    console.log("walletAddress", walletAddress);

    let response = await api.post("auth/nonce", { walletAddress });
    const { nonce } = await response.data;
    const signature = await signer.signMessage(nonce);
    console.log(signature);
    response = await api.post("auth/wallet", {
      walletAddress,
      nonce,
      signature,
    });
    const { token, user } = await response.data;
    console.log(token, user);
    await supabase.auth.setAuth(token);
    await localStorage.setItem("@token", token);
    await localStorage.setItem("@user", JSON.stringify(user));
    await setUser(user);
  }

  //   async function handleSetLogin(token: string) {
  //     try {
  //       await setIsSignIn(true);
  //       let payload: any = token.split(".")[1];
  //       payload = atob(payload);
  //       payload = JSON.parse(payload);
  //       const id = payload.id;
  //       const email = payload.email;

  //       await setUser({
  //         id,
  //         email,
  //       });
  //       await localStorage.setItem("@token", token);
  //     } catch (e) {
  //       handleLogout();
  //     } finally {
  //       setIsSignIn(false);
  //     }
  //   }

  async function handleLogout() {
    setUser(null);
    await localStorage.removeItem("@token");
    await localStorage.removeItem("@user");
    window.location.href = "/";
  }
  useEffect(() => {
    setIsSignIn(true);
    async function signIn() {
      const storageToken = localStorage.getItem("@token");
      const storageUser = localStorage.getItem("@user");
      if (storageToken && storageUser) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storageToken}`;
        await supabase.auth.setAuth(storageToken);
        await setUser(JSON.parse(storageUser));
      }
    }
    signIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        supabase,
        user,
        isSignIn,
        handleSetLogin,
        handleLogout,
        loginState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider };
