import { createPimlicoClient } from "permissionless/clients/pimlico";
import { http } from "viem";
import { parseEther } from "viem";
import { bundlerClient } from "./config";
import { smartAccount } from "./createDelegatorAccount";

const pimlicoClient = createPimlicoClient({
  transport: http("https://api.pimlico.io/v2/59141/rpc?apikey=pim_6Fcqey6YrWekNjJ3KSx5mM"), // You can get the API Key from the Pimlico dashboard.
});

const { fast: fee } = await pimlicoClient.getUserOperationGasPrice();

const userOperationHash = await bundlerClient.sendUserOperation({
  account: smartAccount,
  calls: [
    {
      to: "0x1234567890123456789012345678901234567890",
      value: parseEther("1")
    }
  ],
  ...fee
});

const { receipt } = await bundlerClient.waitForUserOperationReceipt({
  hash: userOperationHash
});

console.log("Receipt: ",receipt.transactionHash);
