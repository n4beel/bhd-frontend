/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract HackerCouncilToken",
        name: "_HCR",
        type: "address",
      },
      {
        internalType: "contract BlockHackerToken",
        name: "_HKR",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "HCR",
    outputs: [
      {
        internalType: "contract HackerCouncilToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HKR",
    outputs: [
      {
        internalType: "contract BlockHackerToken",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasStaked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isStaking",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "issueTokens",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakers",
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
        name: "",
        type: "address",
      },
    ],
    name: "stakingBalance",
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
    inputs: [],
    name: "unstakeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107db3803806107db83398101604081905261002f9161006b565b600080546001600160a01b03199081163317909155600280546001600160a01b03948516908316179055600180549290931691161790556100bc565b6000806040838503121561007d578182fd5b8251610088816100a4565b6020840151909250610099816100a4565b809150509250929050565b6001600160a01b03811681146100b957600080fd5b50565b610710806100cb6000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c806316942b5d1461009357806345bc78ab146100c357806360ab5852146100f15780636f49712b146100fb5780638da5cb5b1461012e578063a5ce413b14610141578063b60740ce14610149578063c93c8f341461015c578063dd49756e1461017f578063fd5e6dd114610192575b600080fd5b6001546100a6906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e36100d13660046105f2565b60046020526000908152604090205481565b6040519081526020016100ba565b6100f96101a5565b005b61011e6101093660046105f2565b60066020526000908152604090205460ff1681565b60405190151581526020016100ba565b6000546100a6906001600160a01b031681565b6100f9610350565b6002546100a6906001600160a01b031681565b61011e61016a3660046105f2565b60056020526000908152604090205460ff1681565b6100f961018d366004610640565b610445565b6100a66101a0366004610640565b6105c8565b6000546001600160a01b031633146101f05760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064015b60405180910390fd5b60005b60035481101561034d5760006003828154811061022057634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b0316808352600490915260408220546003805492945090926006929091908690811061027157634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b0316835282019290925260400190205460ff166102a457505061033b565b8015610338576002546001600160a01b031663a9059cbb836102c7600a85610689565b6040518363ffffffff1660e01b81526004016102e4929190610658565b602060405180830381600087803b1580156102fe57600080fd5b505af1158015610312573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103369190610620565b505b50505b80610345816106a9565b9150506101f3565b50565b33600090815260046020526040902054806103995760405162461bcd60e51b8152602060048201526009602482015268302062616c616e636560b81b60448201526064016101e7565b60015460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906103cb9033908590600401610658565b602060405180830381600087803b1580156103e557600080fd5b505af11580156103f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041d9190610620565b505033600090815260046020908152604080832083905560069091529020805460ff19169055565b6000811161048a5760405162461bcd60e51b81526020600482015260126024820152710616d6f756e742063616e6e6f7420626520360741b60448201526064016101e7565b6001546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd90606401602060405180830381600087803b1580156104dc57600080fd5b505af11580156104f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105149190610620565b503360009081526004602052604081208054839290610534908490610671565b90915550503360009081526005602052604090205460ff1661059357600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b031916331790555b503360009081526005602090815260408083208054600160ff1991821681179092556006909352922080549091169091179055565b600381815481106105d857600080fd5b6000918252602090912001546001600160a01b0316905081565b600060208284031215610603578081fd5b81356001600160a01b0381168114610619578182fd5b9392505050565b600060208284031215610631578081fd5b81518015158114610619578182fd5b600060208284031215610651578081fd5b5035919050565b6001600160a01b03929092168252602082015260400190565b60008219821115610684576106846106c4565b500190565b6000826106a457634e487b7160e01b81526012600452602481fd5b500490565b60006000198214156106bd576106bd6106c4565b5060010190565b634e487b7160e01b600052601160045260246000fdfea264697066735822122088cf435e5c11c36a980f9144d7940b93f92f12f95d7a3cfeb987a30f3085abfb64736f6c63430008040033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _HCR: PromiseOrValue<string>,
    _HKR: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Staking> {
    return super.deploy(_HCR, _HKR, overrides || {}) as Promise<Staking>;
  }
  override getDeployTransaction(
    _HCR: PromiseOrValue<string>,
    _HKR: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_HCR, _HKR, overrides || {});
  }
  override attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  override connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
