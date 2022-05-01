import * as ethers from "ethers";
import { kmsSigner } from "../common";
const artifacts = require("../artifacts/contracts/Greeter.sol/Greeter.json");

const main = async () => {
  const signer = kmsSigner();
  const contract = new ethers.Contract(
    "0xa3216C373E49A703c6a639562814C94958b9CA9B",
    artifacts.abi,
    signer
  );

  const res = await contract.setGreeting("Ohayo~"); // gasLimit is necessary
  console.log("greet result:", res);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
