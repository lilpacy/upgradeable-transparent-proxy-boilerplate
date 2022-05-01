import env from "hardhat";
import { HttpNetworkConfig } from "hardhat/types";
import * as ethers from "ethers";
const artifacts = require("../artifacts/contracts/Greeter.sol/Greeter.json");

const main = async () => {
  const rpcUrl = (env.network.config as HttpNetworkConfig).url;
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract(
    "0xa3216C373E49A703c6a639562814C94958b9CA9B",
    artifacts.abi,
    provider
  );

  const res = await contract.greet(); // gasLimit is necessary
  console.log("greet result:", res);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
