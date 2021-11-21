import supabase from "../../../services/supabase";
import { v4 } from "uuid";

const nonceApi = async (req, res) => {
  const { walletAddress } = req.body;
  const nonce = v4();

  let { data, error } = await supabase
    .from("users")
    .select("nonce")
    .eq("walletAddress", walletAddress);

  if (data.length > 0) {
    let { data, error } = await supabase
      .from("users")
      .update({ nonce })
      .match({ walletAddress });
  } else {
    let { data, error } = await supabase
      .from("users")
      .insert({ nonce, walletAddress });
  }

  try {
    if (error) {
      throw new Error(error.message);
    }
    await res.status(200).json({ nonce });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default nonceApi;
