const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("ERC20MinerRewardModuleV2", (m) => {
    const ERC20MinerRewardV2 = m.contract("ERC20MinerRewardModuleV2", []);
    return { ERC20MinerRewardV2 };
});