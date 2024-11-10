// Load Accounts
import { generateAccounts } from './loadMnemonicAccounts'
import fs from 'fs'
let mnemonic = process.env.MNEMONIC;
let mnemonic_path = process.env.MNEMONIC_PATH;
console.log(process.env.MNEMONIC_PATH)
if (!mnemonic) {
  throw new Error("MNEMONIC not found in .env file");
}
console.log(`mnemonic=${mnemonic}`)
let accounts = await generateAccounts(mnemonic, mnemonic_path)


// Setup Provider to Connect to Smart Contract
// Connect to RPC Interface
import { ethers } from "ethers";

let url = 'https://gnosis-chiado-rpc.publicnode.com'
let provider = new ethers.JsonRpcProvider(url)

// let ws_url = "wss://gnosis-chiado-rpc.publicnode.com"
// let provider = new ethers.WebSocketProvider(ws_url)


let blockNumber = await provider.getBlockNumber()
console.log("blockNumber")
console.log(blockNumber)

// // Read in ABI
let ERC20ABI = await fs.readFileSync("./helperScripts/ERC20ABI.json")
ERC20ABI = JSON.parse(ERC20ABI)
console.log(Object.keys(ERC20ABI))

// Setup Contract
let ContractAddress = "0xa6Ba7C33b849b787970cB801a7Fa8F56511162c7"
let contract = new ethers.Contract(ContractAddress, ERC20ABI.abi, provider)

// // Get Contract Address, see if it exists
console.log(contract)
let balance = await contract.balanceOf("0x126ba87540f4e60374ac09cc6a2c92738dc7c823")
console.log("balance")
console.log(balance)
