/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface HandcuffsInterface extends ethers.utils.Interface {
  functions: {
    "createVaultOtherBeneficiary(uint256,uint256,address,address,address,address)": FunctionFragment;
    "createVaultSelfBeneficiary(uint256,uint256,address,address,address)": FunctionFragment;
    "depositIntoExistingVault(address,uint256)": FunctionFragment;
    "getVaultCount(address)": FunctionFragment;
    "getVaultInfo(address,uint256)": FunctionFragment;
    "signWithdraw(address,uint256)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createVaultOtherBeneficiary",
    values: [BigNumberish, BigNumberish, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createVaultSelfBeneficiary",
    values: [BigNumberish, BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositIntoExistingVault",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultInfo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signWithdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createVaultOtherBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createVaultSelfBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositIntoExistingVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class Handcuffs extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: HandcuffsInterface;

  functions: {
    createVaultOtherBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createVaultOtherBeneficiary(uint256,uint256,address,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createVaultSelfBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createVaultSelfBeneficiary(uint256,uint256,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositIntoExistingVault(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "depositIntoExistingVault(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVaultCount(
      creator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getVaultCount(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVaultInfo(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        string,
        boolean,
        string,
        boolean
      ]
    >;

    "getVaultInfo(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        string,
        boolean,
        string,
        boolean
      ]
    >;

    signWithdraw(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "signWithdraw(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,address,uint256)"(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createVaultOtherBeneficiary(
    lockSeconds: BigNumberish,
    numConfirmations: BigNumberish,
    guardianOne: string,
    guardianTwo: string,
    guardianThree: string,
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createVaultOtherBeneficiary(uint256,uint256,address,address,address,address)"(
    lockSeconds: BigNumberish,
    numConfirmations: BigNumberish,
    guardianOne: string,
    guardianTwo: string,
    guardianThree: string,
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createVaultSelfBeneficiary(
    lockSeconds: BigNumberish,
    numConfirmations: BigNumberish,
    guardianOne: string,
    guardianTwo: string,
    guardianThree: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createVaultSelfBeneficiary(uint256,uint256,address,address,address)"(
    lockSeconds: BigNumberish,
    numConfirmations: BigNumberish,
    guardianOne: string,
    guardianTwo: string,
    guardianThree: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositIntoExistingVault(
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "depositIntoExistingVault(address,uint256)"(
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVaultCount(creator: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getVaultCount(address)"(
    creator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVaultInfo(
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      boolean,
      string,
      boolean,
      string,
      boolean
    ]
  >;

  "getVaultInfo(address,uint256)"(
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      boolean,
      string,
      boolean,
      string,
      boolean
    ]
  >;

  signWithdraw(
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "signWithdraw(address,uint256)"(
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    withdrawTo: string,
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,address,uint256)"(
    withdrawTo: string,
    creator: string,
    vaultIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createVaultOtherBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createVaultOtherBeneficiary(uint256,uint256,address,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createVaultSelfBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createVaultSelfBeneficiary(uint256,uint256,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositIntoExistingVault(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositIntoExistingVault(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getVaultCount(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVaultCount(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultInfo(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        string,
        boolean,
        string,
        boolean
      ]
    >;

    "getVaultInfo(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        string,
        boolean,
        string,
        boolean
      ]
    >;

    signWithdraw(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "signWithdraw(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,address,uint256)"(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createVaultOtherBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createVaultOtherBeneficiary(uint256,uint256,address,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createVaultSelfBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createVaultSelfBeneficiary(uint256,uint256,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositIntoExistingVault(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "depositIntoExistingVault(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVaultCount(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVaultCount(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultInfo(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVaultInfo(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signWithdraw(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "signWithdraw(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(address,address,uint256)"(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createVaultOtherBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createVaultOtherBeneficiary(uint256,uint256,address,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createVaultSelfBeneficiary(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createVaultSelfBeneficiary(uint256,uint256,address,address,address)"(
      lockSeconds: BigNumberish,
      numConfirmations: BigNumberish,
      guardianOne: string,
      guardianTwo: string,
      guardianThree: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositIntoExistingVault(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "depositIntoExistingVault(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVaultCount(
      creator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVaultCount(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaultInfo(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVaultInfo(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signWithdraw(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "signWithdraw(address,uint256)"(
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,address,uint256)"(
      withdrawTo: string,
      creator: string,
      vaultIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}