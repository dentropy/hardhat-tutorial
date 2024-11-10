// require("dotenv").config();
// const ethers = require("ethers");
import { ethers } from "ethers";

export async function generateAccounts(mnemonic : string, mnemonic_path: string) {
  if (mnemonic_path == "" || mnemonic_path == undefined) {
    mnemonic_path = "m/44'/60'/0'/0";
  }
  console.log("mnemonic_path")
  console.log(mnemonic_path)
  let accounts = [];
  for (var i = 0; i < 10; i++) {
    let split_mnemonic = mnemonic_path.split("/");
    split_mnemonic[4] = String(i);
    mnemonic_path = split_mnemonic.join("/");
    let MyMnemonic = ethers.Mnemonic.fromPhrase(mnemonic)
    const wallet = ethers.HDNodeWallet.fromMnemonic(MyMnemonic, mnemonic_path, "");
    accounts.push(wallet);
    console.log(`Wallet ${String(i)} Adress = ${wallet.address}`);
  }
  return accounts;
}

// let mnemonic = process.env.MNEMONIC;
// let mnemonic_path = process.env.MNEMONIC_PATH;
// console.log(process.env.MNEMONIC_PATH)
// if (!mnemonic) {
//   throw new Error("MNEMONIC not found in .env file");
// }
// console.log(`mnemonic=${mnemonic}`)
// let accounts = await generateAccounts(mnemonic, mnemonic_path)
