import {
  loadFixture,
  time,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";

describe("Test Tokens", function () {
  describe("ERC20 Token Test", function () {
    it("Deploy Token Check Balance", async function () {
        const [account0, account1] = await hre.ethers.getSigners();
        const Token = await hre.ethers.getContractFactory("Token");
        const TokenDeployed = await Token.deploy("Paul's Token", "PCOIN");
        console.log(TokenDeployed)
        console.log(TokenDeployed.interface)
        let decimals = parseInt((await TokenDeployed.decimals()).toString())
        expect(decimals).to.equal(18)
        let initalUserBalance = await TokenDeployed.balanceOf(account0.address)
        let userTransfer = await TokenDeployed.connect(account0).transfer(account1.address, 10)
        let balanceAfterTransfer = await TokenDeployed.balanceOf(account0.address)
        let bigIntBalanceAfterTransfer = new BigNumber(balanceAfterTransfer.toString())
        let bigNumberTest = new BigNumber("1000000000000000000")
        bigNumberTest = bigNumberTest.times(10000000)
        bigNumberTest = bigNumberTest.minus(10)
        expect(bigIntBalanceAfterTransfer.toString()).to.equal(bigNumberTest.toString())
    });
  });
});
