// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract Token is ERC20, ERC20Permit {
    constructor(string memory name, string memory ticker) ERC20(name, ticker) ERC20Permit(name) {
        _mint(msg.sender, 10000000 * 10 ** decimals());
    }
}