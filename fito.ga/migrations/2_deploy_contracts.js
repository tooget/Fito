var TestContract = artifacts.require("TestContract");
var GeneralMeeting = artifacts.require("GeneralMeeting");

module.exports = function(deployer) {
  deployer.deploy(TestContract);
  deployer.deploy(GeneralMeeting);
};