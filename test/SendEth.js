const { expect } = require("chai");
const hre = require("hardhat");
const {address} = require("hardhat/internal/core/config/config-validation");
describe("SendEth", function () {
    let sendEthContract;
    before(async () => {
        // ⽣成合约实例并且复⽤
        sendEthContract = await hre.ethers.deployContract("SendEth", []); });
    it("should return correct event description", async () => {
        await expect(sendEthContract._reward()) // 验证事件是否被触发
            .to.emit(sendEthContract, "LogNewAlert") // 验证事件的参数是否符合预期
            .withArgs("_rewarded",undefined,undefined);
    });
});