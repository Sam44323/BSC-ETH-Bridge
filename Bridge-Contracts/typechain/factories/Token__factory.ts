/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "updateAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620023f1380380620023f18339818101604052810190620000379190620002c6565b8181816003908051906020019062000051929190620001a4565b5080600490805190602001906200006a929190620001a4565b5050506200008d62000081620000d660201b60201c565b620000de60201b60201c565b33600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200046a565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b290620003d6565b90600052602060002090601f016020900481019282620001d6576000855562000222565b82601f10620001f157805160ff191683800117855562000222565b8280016001018555821562000222579182015b828111156200022157825182559160200191906001019062000204565b5b50905062000231919062000235565b5090565b5b808211156200025057600081600090555060010162000236565b5090565b60006200026b62000265846200036d565b62000339565b9050828152602081018484840111156200028457600080fd5b62000291848285620003a0565b509392505050565b600082601f830112620002ab57600080fd5b8151620002bd84826020860162000254565b91505092915050565b60008060408385031215620002da57600080fd5b600083015167ffffffffffffffff811115620002f557600080fd5b620003038582860162000299565b925050602083015167ffffffffffffffff8111156200032157600080fd5b6200032f8582860162000299565b9150509250929050565b6000604051905081810181811067ffffffffffffffff821117156200036357620003626200043b565b5b8060405250919050565b600067ffffffffffffffff8211156200038b576200038a6200043b565b5b601f19601f8301169050602081019050919050565b60005b83811015620003c0578082015181840152602081019050620003a3565b83811115620003d0576000848401525b50505050565b60006002820490506001821680620003ef57607f821691505b602082108114156200040657620004056200040c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611f77806200047a6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063a9059cbb11610071578063a9059cbb146102e3578063dd62ed3e14610313578063e2f273bd14610343578063f2fde38b1461035f578063f851a4401461037b57610116565b80638da5cb5b1461025b57806395d89b41146102795780639dc29fac14610297578063a457c2d7146102b357610116565b8063313ce567116100e9578063313ce567146101b757806339509351146101d557806340c10f191461020557806370a0823114610221578063715018a61461025157610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd1461016957806323b872dd14610187575b600080fd5b610123610399565b6040516101309190611b4c565b60405180910390f35b610153600480360381019061014e9190611583565b61042b565b6040516101609190611b31565b60405180910390f35b610171610449565b60405161017e9190611d0e565b60405180910390f35b6101a1600480360381019061019c9190611534565b610453565b6040516101ae9190611b31565b60405180910390f35b6101bf61054b565b6040516101cc9190611d29565b60405180910390f35b6101ef60048036038101906101ea9190611583565b610554565b6040516101fc9190611b31565b60405180910390f35b61021f600480360381019061021a9190611583565b610600565b005b61023b600480360381019061023691906114cf565b61069e565b6040516102489190611d0e565b60405180910390f35b6102596106e6565b005b61026361076e565b6040516102709190611b16565b60405180910390f35b610281610798565b60405161028e9190611b4c565b60405180910390f35b6102b160048036038101906102ac9190611583565b61082a565b005b6102cd60048036038101906102c89190611583565b6108c8565b6040516102da9190611b31565b60405180910390f35b6102fd60048036038101906102f89190611583565b6109b3565b60405161030a9190611b31565b60405180910390f35b61032d600480360381019061032891906114f8565b6109d1565b60405161033a9190611d0e565b60405180910390f35b61035d600480360381019061035891906114cf565b610a58565b005b610379600480360381019061037491906114cf565b610b2c565b005b610383610c24565b6040516103909190611b16565b60405180910390f35b6060600380546103a890611e72565b80601f01602080910402602001604051908101604052809291908181526020018280546103d490611e72565b80156104215780601f106103f657610100808354040283529160200191610421565b820191906000526020600020905b81548152906001019060200180831161040457829003601f168201915b5050505050905090565b600061043f610438610c4a565b8484610c52565b6001905092915050565b6000600254905090565b6000610460848484610e1d565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104ab610c4a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561052b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052290611c0e565b60405180910390fd5b61053f85610537610c4a565b858403610c52565b60019150509392505050565b60006012905090565b60006105f6610561610c4a565b84846001600061056f610c4a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f19190611d60565b610c52565b6001905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610690576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068790611cae565b60405180910390fd5b61069a828261109e565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106ee610c4a565b73ffffffffffffffffffffffffffffffffffffffff1661070c61076e565b73ffffffffffffffffffffffffffffffffffffffff1614610762576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075990611c2e565b60405180910390fd5b61076c60006111fe565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546107a790611e72565b80601f01602080910402602001604051908101604052809291908181526020018280546107d390611e72565b80156108205780601f106107f557610100808354040283529160200191610820565b820191906000526020600020905b81548152906001019060200180831161080357829003601f168201915b5050505050905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b190611cae565b60405180910390fd5b6108c482826112c4565b5050565b600080600160006108d7610c4a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610994576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098b90611cce565b60405180910390fd5b6109a861099f610c4a565b85858403610c52565b600191505092915050565b60006109c76109c0610c4a565b8484610e1d565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ae8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adf90611cae565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610b34610c4a565b73ffffffffffffffffffffffffffffffffffffffff16610b5261076e565b73ffffffffffffffffffffffffffffffffffffffff1614610ba8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9f90611c2e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0f90611bae565b60405180910390fd5b610c21816111fe565b50565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb990611c8e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2990611bce565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e109190611d0e565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8490611c6e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef490611b6e565b60405180910390fd5b610f0883838361149b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8590611bee565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110219190611d60565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110859190611d0e565b60405180910390a36110988484846114a0565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561110e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110590611cee565b60405180910390fd5b61111a6000838361149b565b806002600082825461112c9190611d60565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111819190611d60565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516111e69190611d0e565b60405180910390a36111fa600083836114a0565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132b90611c4e565b60405180910390fd5b6113408260008361149b565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113bd90611b8e565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461141d9190611db6565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114829190611d0e565b60405180910390a3611496836000846114a0565b505050565b505050565b505050565b6000813590506114b481611f13565b92915050565b6000813590506114c981611f2a565b92915050565b6000602082840312156114e157600080fd5b60006114ef848285016114a5565b91505092915050565b6000806040838503121561150b57600080fd5b6000611519858286016114a5565b925050602061152a858286016114a5565b9150509250929050565b60008060006060848603121561154957600080fd5b6000611557868287016114a5565b9350506020611568868287016114a5565b9250506040611579868287016114ba565b9150509250925092565b6000806040838503121561159657600080fd5b60006115a4858286016114a5565b92505060206115b5858286016114ba565b9150509250929050565b6115c881611dea565b82525050565b6115d781611dfc565b82525050565b60006115e882611d44565b6115f28185611d4f565b9350611602818560208601611e3f565b61160b81611f02565b840191505092915050565b6000611623602383611d4f565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611689602283611d4f565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006116ef602683611d4f565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611755602283611d4f565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006117bb602683611d4f565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611821602883611d4f565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611887602083611d4f565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006118c7602183611d4f565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061192d602583611d4f565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611993602483611d4f565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006119f9602183611d4f565b91507f4f6e6c792041646d696e2063616e206163636573732074686973206d6574686f60008301527f64000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a5f602583611d4f565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611ac5601f83611d4f565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b611b0181611e28565b82525050565b611b1081611e32565b82525050565b6000602082019050611b2b60008301846115bf565b92915050565b6000602082019050611b4660008301846115ce565b92915050565b60006020820190508181036000830152611b6681846115dd565b905092915050565b60006020820190508181036000830152611b8781611616565b9050919050565b60006020820190508181036000830152611ba78161167c565b9050919050565b60006020820190508181036000830152611bc7816116e2565b9050919050565b60006020820190508181036000830152611be781611748565b9050919050565b60006020820190508181036000830152611c07816117ae565b9050919050565b60006020820190508181036000830152611c2781611814565b9050919050565b60006020820190508181036000830152611c478161187a565b9050919050565b60006020820190508181036000830152611c67816118ba565b9050919050565b60006020820190508181036000830152611c8781611920565b9050919050565b60006020820190508181036000830152611ca781611986565b9050919050565b60006020820190508181036000830152611cc7816119ec565b9050919050565b60006020820190508181036000830152611ce781611a52565b9050919050565b60006020820190508181036000830152611d0781611ab8565b9050919050565b6000602082019050611d236000830184611af8565b92915050565b6000602082019050611d3e6000830184611b07565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611d6b82611e28565b9150611d7683611e28565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611dab57611daa611ea4565b5b828201905092915050565b6000611dc182611e28565b9150611dcc83611e28565b925082821015611ddf57611dde611ea4565b5b828203905092915050565b6000611df582611e08565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611e5d578082015181840152602081019050611e42565b83811115611e6c576000848401525b50505050565b60006002820490506001821680611e8a57607f821691505b60208210811415611e9e57611e9d611ed3565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611f1c81611dea565b8114611f2757600080fd5b50565b611f3381611e28565b8114611f3e57600080fd5b5056fea2646970667358221220f276b42f48d2218c5d5bd6a13ee56c6ece2846a2a20e6ad39a90d119da111a1f64736f6c63430008000033";

export class Token__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(name, symbol, overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
