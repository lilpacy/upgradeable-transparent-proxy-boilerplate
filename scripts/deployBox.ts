import { ethers, upgrades } from "hardhat";
import { kmsSigner } from "../common";

async function main() {
  const signer = kmsSigner();
  const Box = await ethers.getContractFactory("Box", signer);
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  await box.deployed();

  console.log(box.address, " box(proxy) address");
  console.log(
    await upgrades.erc1967.getImplementationAddress(box.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(box.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
