// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    address public admin;

    // constructor for creating a new token and setting the admin for the Token
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        admin = msg.sender;
    }

    // method for updating the admin

    function updateAdmin(address newAdmin) external onlyAdmin {
        admin = newAdmin;
    }

    // method for minting "amount" tokens for "to" address
    function mint(address to, uint256 amount) external onlyAdmin {
        _mint(to, amount);
    }

    function burn(address owner, uint256 amount) external onlyAdmin {
        _burn(owner, amount);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only Admin can access this method");
        _;
    }
}
