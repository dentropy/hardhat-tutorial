require('dotenv').config();
const ethers = require('ethers');

async function main() {
  // Load the mnemonic from the .env file
  let mnemonic = process.env.MNEMONIC;
  let mnemonic_path = process.env.MNEMONIC_PATH
  if (mnemonic_path == ''){
    mnemonic_path = "m/44'/60'/0'/0"
  }
  if (!mnemonic) {
    throw new Error('MNEMONIC not found in .env file');
  }

  const wallet = ethers.Wallet.fromMnemonic(mnemonic, mnemonic_path);
  console.log('Wallet address:', wallet.address);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});