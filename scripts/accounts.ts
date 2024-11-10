import hre from "hardhat"

import { ethers } from "ethers";

import fs from 'fs'
async function main() {
  console.log("MAIN RAN")
  const accounts = await hre.ethers.getSigners();
  const provider = await hre.ethers.getDefaultProvider();
  // console.log(await provider.provider.getBlockNumber())

  // console.log(Object.keys(hre))
  // console.log(Object.keys(hre.ethers))
  let mah_contract = await hre.ethers.getContractFactory("Token")
  console.log(mah_contract)
  console.log(Object.keys(mah_contract))
  
  // Getting data form wrong spot
  let token_abi = JSON.parse(  await fs.readFileSync(process.cwd() + "/artifacts/contracts/Token.sol/Token.json", "utf8") )
  // deployed_address = JSON.parse(deployed_address)
  // deployed_address = deployed_address["my_token#Token"]
  // console.log(deployed_address)
  let token_address = JSON.parse(  await fs.readFileSync(process.cwd() + "/ignition/deployments/chain-10200/deployed_addresses.json", "utf8") )
  console.log(token_address)
  token_address = token_address[Object.keys(token_address)[0]]



  console.log(Object.keys(mah_contract))
  console.log(Object.keys(mah_contract.runner))
  // console.log(Object.keys(mah_contract.interface))

  // console.log(mah_contract.runner.provider)
  // console.log(mah_contract.runner.address)


  // console.log(mah_contract.interface)


  // mah_contract.runner.getBalance(accounts[0].address)

  console.log(mah_contract.interface)
  // let abi = [
  //   "function transfer(address to, uint amount) returns (bool)"
  // ]

  console.log(mah_contract)

  console.log(token_address)
  console.log(token_address)
  const contract = new ethers.Contract(
    // "0xa6Ba7C33b849b787970cB801a7Fa8F56511162c7",
    token_address,
    mah_contract.interface,
    mah_contract.runner.provider
  )
  // console.log(contract)
  // const contractAsOther = contract.connect(accounts[0].connect(mah_contract.runner.provider))

  // console.log(mah_contract.runner.address)
  // // console.log(contract.interface)

  let balance = await contract.balanceOf(accounts[0].address)
  console.log(balance)

  console.log(Object.keys(contract))
  console.log(contract.balanceOf)


  console.log(process.env)





  // let balance = contractAsOther.getBalance(accounts[0].address)
  // console.log(balance)
  // console.log(token_abi)
  // console.log(Object.keys(contractAsOther))
  // const balance = await contractAsOther.getBalance(accounts[0].address)

  // console.log(balance)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});