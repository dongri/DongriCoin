// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract DongriCoin is ERC20, ERC20Detailed {

  string private _name = "DongriCoin";
  string private _symbol = "DON";
  uint8 private _decimals  = 18;

  constructor () public ERC20Detailed(_name, _symbol, _decimals) {
    _mint(msg.sender, 19800000 * (10 ** uint256(_decimals)));
  }

}
