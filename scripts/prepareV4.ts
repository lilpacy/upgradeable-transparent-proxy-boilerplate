// scripts/4.prepareV4.ts
import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
// const proxyAddress = '0x1CD0c84b7C7C1350d203677Bb22037A92Cc7e268'
async function main() {
  console.log(proxyAddress, " original Box(proxy) address");
  const BoxV4 = await ethers.getContractFactory("BoxV4");
  console.log("Preparing upgrade to BoxV4...");
  const boxV4Address = await upgrades.prepareUpgrade(proxyAddress, BoxV4);
  console.log(boxV4Address, " BoxV4 implementation contract address");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
