const DongriCoin = artifacts.require('./DongriCoin.sol')
 
module.exports = (deployer) => {
  deployer.deploy(DongriCoin)
}
