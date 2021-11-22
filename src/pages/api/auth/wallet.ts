import supabase from "../../../services/supabase";
import { ethers } from "ethers";
import jwt from "jsonwebtoken";

const walletApi = async (req, res) => {
  const { walletAddress, nonce, signature } = req.body;
  console.log(walletAddress, signature, nonce);
  const signerAdr = ethers.utils.verifyMessage(nonce, signature);

  if (signerAdr !== walletAddress) {
    throw new Error("wrong credentials");
  }
  let { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("walletAddress", walletAddress)
    .eq("nonce", nonce)
    .single();

  const token = jwt.sign(
    {
      aud: "authenticated",
      exp: Math.floor(Date.now() / 1000 + 60 * 60),
      sub: user.id,
      user_metadata: {
        id: user.id,
      },
      role: "authenticated",
    },
    process.env.NEXT_SUPABASE_JWT_SECRET
  );

  try {
    if (error) {
      throw new Error(error.message);
    }
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default walletApi;
