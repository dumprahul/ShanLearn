import { publicClient, owner } from "./config";
import { 
  Implementation, 
  toMetaMaskSmartAccount,
} from "@metamask/delegation-toolkit";

const deploySalt = "0x";
const owner_address = "0x0612D26676869aFcF8BCfdcC55Bd62a307fBF4b5";


export default async function createDelegatorAccount() {
  const smartAccount = await toMetaMaskSmartAccount({
    client: publicClient,
    implementation: Implementation.Hybrid,
    deployParams: [owner.address, [], [], []],
    deploySalt,
    signatory: { account: owner },
  });

  console.log("Smart account created:", smartAccount.address);

  return smartAccount;
};

export const smartAccount = await toMetaMaskSmartAccount({
    client: publicClient,
    implementation: Implementation.Hybrid,
    deployParams: [owner.address, [], [], []],
    deploySalt,
    signatory: { account: owner },
});


