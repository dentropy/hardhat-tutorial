import { generateAccounts } from './loadMnemonicAccounts'

let mnemonic = process.env.MNEMONIC;
let mnemonic_path = process.env.MNEMONIC_PATH;
console.log(process.env.MNEMONIC_PATH)
if (!mnemonic) {
  throw new Error("MNEMONIC not found in .env file");
}
console.log(`mnemonic=${mnemonic}`)
let accounts = await generateAccounts(mnemonic, mnemonic_path)
// console.log(accounts)