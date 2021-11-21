// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../base/Bridge.sol";

contract BridgeETH is Bridge {
    constructor(address token_address) Bridge(token_address) {}
}
