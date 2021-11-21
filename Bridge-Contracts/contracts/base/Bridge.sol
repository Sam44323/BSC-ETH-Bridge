// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../base/IToken.sol";

// the base implementation contract for the bridge

contract Bridge {
    address public admin;
    IToken public immutable token;
    uint256 public nonce;
    mapping(uint256 => bool) public processedTransactionNonces;

    enum Step {
        Burn,
        Mint
    }

    event Transfer(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 date,
        uint256 nonce,
        Step indexed step
    );

    // initializing the bridge with the token contract and the admin address
    constructor(address _token) {
        admin = msg.sender;
        token = IToken(_token); // getting the token from the IERC interface
    }

    // burn some amount of tokens
    function burn(address to, uint256 _amount) public {
        token.burn(msg.sender, _amount);
        emit Transfer(
            msg.sender,
            to,
            _amount,
            block.timestamp,
            nonce,
            Step.Burn
        );
        nonce++;
    }
}
