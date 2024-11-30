const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("SendMrwModule", (m) => {
    const sendMrw = m.contract("SendMrw", []);
    return { sendMrw };
});