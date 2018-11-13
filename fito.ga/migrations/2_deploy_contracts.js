var GeneralMeeting = artifacts.require("GeneralMeeting");

module.exports = function(deployer) {
  deployer.deploy(GeneralMeeting);
};