import * as ethers from "ethers";
import { KmsEthersSigner } from "aws-kms-ethers-signer";
import env from "hardhat";
import { HttpNetworkConfig } from "hardhat/types";

export const kmsSigner: () => ethers.Signer = () => {
  const keyId = process.env.KMS_KEY_ID!;
  const rpcUrl = (env.network.config as HttpNetworkConfig).url;
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const signer = new KmsEthersSigner({ keyId }).connect(provider);
  return signer;
};
