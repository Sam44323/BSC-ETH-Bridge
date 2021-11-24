// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../base/Token.sol";

contract TokenETH is Token {
    // creating a token for BSC
    constructor() Token("ETH Token", "ETK", 100000000 ether) {}
}
