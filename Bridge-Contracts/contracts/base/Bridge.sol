// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// the base implementation contract for the bridge

contract Bridge {
    address public admin;
    IERC20 public token;
    uint256 public nonce;
    mapping(uint256 => bool) public processedTransactionNonces;
}
