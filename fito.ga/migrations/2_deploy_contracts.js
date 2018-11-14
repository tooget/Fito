var FitoContract = artifacts.require("FitoContract.sol");

module.exports = function(deployer) {
  deployer.deploy(FitoContract, 123);
};