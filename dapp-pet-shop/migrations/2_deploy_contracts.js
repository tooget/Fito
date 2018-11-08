var Adoption = artifacts.require("./Adoption.sol");

module.exports = function(deployer) {
  // Pass 123 to the contract as the first constructor parameter
  deployer.deploy(Adoption, 123)
};