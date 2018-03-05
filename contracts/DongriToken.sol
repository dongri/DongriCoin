pragma solidity ^0.4.18;
import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';
 
contract DongriToken is StandardToken {
  string public name = "DongriToken";
  string public symbol = "DON";
  uint public decimals = 18;
 
  function DongriToken(uint initialSupply) public {
    totalSupply_ = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}

