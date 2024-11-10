import { generateAccounts } from './loadMnemonicAccounts'
import {ethers } from 'ethers'

let mnemonic = process.env.MNEMONIC;
let mnemonic_path = process.env.MNEMONIC_PATH;
console.log(process.env.MNEMONIC_PATH)
if (!mnemonic) {
  throw new Error("MNEMONIC not found in .env file");
}
console.log(`mnemonic=${mnemonic}`)
let accounts = await generateAccounts(mnemonic, mnemonic_path)



let ws_url = "wss://gnosis-chiado-rpc.publicnode.com"
let provider = new ethers.WebSocketProvider(ws_url)

for(var i = 0; i < accounts.length; i++){
  let Balance = await provider.getBalance(accounts[i].address)
  console.log(`Account ${String(i)}, Addresss=${accounts[i].address}, Balance=${Balance.toString()}`)
}