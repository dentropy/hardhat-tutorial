const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("my_token", (m: any) => {
  console.log(m)
  console.log(Object.keys(m))
  const token = m.contract("Token", ["My Token", "TKN"]);
  return { token };
});