"use client";

import { usePimlicoUtils } from "@/hooks/usePimlicoUtils";
import useDelegateSmartAccount from "@/hooks/useDelegateSmartAccount";
import useStorageClient from "@/hooks/useStorageClient";
import { prepareRedeemDelegationData } from "@/utils/delegationUtils";
import { getDeleGatorEnvironment } from "@metamask/delegation-toolkit";
import { useState } from "react";
import { Hex } from "viem";
import { sepolia } from "viem/chains";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useRouter } from "next/navigation";

export default function RedeemDelegationButton() {
  const { smartAccount } = useDelegateSmartAccount();
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState<Hex | null>(null);
  const chain = sepolia;
  const { getDelegation } = useStorageClient();
  const { bundlerClient, paymasterClient, pimlicoClient } =
    usePimlicoUtils();
  const router = useRouter();

  const handleRedeemDelegation = async () => {
    if (!smartAccount) return;

    setLoading(true);

    const delegation = getDelegation(smartAccount.address);

    if (!delegation) {
      return;
    }

    const redeemData = prepareRedeemDelegationData(delegation);
    const { fast: fee } = await pimlicoClient!.getUserOperationGasPrice();

    const userOperationHash = await bundlerClient!.sendUserOperation({
      account: smartAccount,
      calls: [
        {
          to: getDeleGatorEnvironment(chain.id).DelegationManager,
          data: redeemData,
        },
      ],
      ...fee,
      paymaster: paymasterClient,
    });

    const { receipt } = await bundlerClient!.waitForUserOperationReceipt({
      hash: userOperationHash,
    });

    setTransactionHash(receipt.transactionHash);

    console.log(receipt);
    setLoading(false);
  };

  if (transactionHash) {
    return (
      <div>
        <ShimmerButton
          className="w-full mb-2"
          onClick={() =>
            window.open(
              `https://sepolia.etherscan.io/tx/${transactionHash}`,
              "_blank"
            )
          }
        >
          View on Etherscan
        </ShimmerButton>
        <ShimmerButton
          className="w-full mt-3"
          onClick={() => router.push('/library')}
        >
          Explore Gaia Agents
        </ShimmerButton>
      </div>
    );
  }

  return (
    <ShimmerButton
      className="w-full mb-2"
      onClick={handleRedeemDelegation}
      disabled={loading}
    >
      {loading ? "Redeeming..." : "Redeem Delegation"}
    </ShimmerButton>
  );
}
