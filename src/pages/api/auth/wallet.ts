import supabase from "../../../services/supabase";
import { ethers } from "ethers";

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
  console.log(error, user);
  try {
    if (error) {
      throw new Error(error.message);
    }
    await res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default walletApi;
