const DongriToken = artifacts.require('./DongriToken.sol')
 
module.exports = (deployer) => {
  let initialSupply = 1000000e18 // 100万
  deployer.deploy(DongriToken, initialSupply)
}
