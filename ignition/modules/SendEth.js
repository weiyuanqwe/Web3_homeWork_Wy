const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("SendEthModule", (m) => {
    const sendEth = m.contract("SendEth", []);
    return { sendEth };
});