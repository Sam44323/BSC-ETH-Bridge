// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// the base implementation contract for the bridge-contract

/*
Bug: Update the minting logic as the current way is wrong
 */

contract Bridge {
    address public admin;
    IERC20 public immutable token;
    uint256 public nonce;
    mapping(uint256 => bool) public processedTransactionNonces; // for storing the nonce process status using boolean and mapping

    enum Step {
        Burn,
        Mint
    }

    /*
     A custom event for bridge which will be emitted when a transaction is processed(burn/mint)
     */

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
        token = IERC20(_token); // getting the token from the IERC interface
    }

    // burn some amount of tokens
    function burn(uint256 _amount) public {
        token.transferFrom(msg.sender, address(this), _amount); // locking the tokens from the sender address in the contract
        emit Transfer(
            msg.sender,
            address(this),
            _amount,
            block.timestamp,
            nonce,
            Step.Burn
        );
        nonce++;
    }

    // function for minting some toknes the reciver

    function getNonce() public view returns (uint256) {
        require(msg.sender == admin, "Only admin can mint tokens");
        return nonce;
    }

    function mint(
        address reciever,
        uint256 amount,
        uint256 otherChainNonce
    ) external {
        require(msg.sender == admin, "Only admin can mint tokens");

        require(
            processedTransactionNonces[otherChainNonce] == false,
            "transfer already processed"
        ); // checking if the nonce is already processed

        processedTransactionNonces[otherChainNonce] = true;
        token.approve(address(this), amount); // approving the amount of tokens to be minted
        token.transferFrom(address(this), reciever, amount * 10**18); // minting some tokens for the reciever
        emit Transfer(
            msg.sender,
            reciever,
            amount,
            block.timestamp,
            otherChainNonce,
            Step.Mint
        );
    }
}
