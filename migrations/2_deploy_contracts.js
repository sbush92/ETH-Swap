const EthSwap = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
