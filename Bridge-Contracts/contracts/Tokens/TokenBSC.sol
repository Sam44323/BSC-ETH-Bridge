// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../base/Token.sol";

contract TokenBSC is Token {
    // creating a token for BSC
    constructor() Token("BSC Token", "BTK", 100000000 ether) {}
}
