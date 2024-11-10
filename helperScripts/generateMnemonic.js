import bip39 from 'bip39'
import fs from 'fs'
const mnemonic = bip39.generateMnemonic()

console.log("Your Mnemonic")
let bash_command = `\nMNEMONIC='${mnemonic}'\n`
console.log("export " + bash_command)
process.env['MNEMONIC'] = mnemonic;
fs.writeFileSync('./helperScripts/.env', bash_command)
console.log("Mnemonic is set in your environment")
console.log("REMEMBER to copy and paste it into new terminals")
