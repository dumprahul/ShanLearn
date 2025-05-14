"use client";
import { useEffect, useState } from "react";
import ConnectButton from "@/components/ConnectButton";
import CreateDelegateButton from "@/components/CreateDelegateButton";
import CreateDelegationButton from "@/components/CreateDelegationButton";
import DeployDelegatorButton from "@/components/DeployDelegatorButton";
import RedeemDelegationButton from "@/components/RedeemDelegationButton";
import useDelegateSmartAccount from "@/hooks/useDelegateAccount";
import useDelegatorSmartAccount from "@/hooks/useDelegatorSmartAccount";
import useStorageClient from "@/hooks/useStorageClient";
import { useAccount } from "wagmi";
import { useStepContext } from "@/hooks/useStepContext";

export default function Steps() {
  const { step, changeStep } = useStepContext();
  const { isConnected } = useAccount();
  const { smartAccount } = useDelegatorSmartAccount();
  const { smartAccount: delegateSmartAccount } = useDelegateSmartAccount();
  const { getDelegation } = useStorageClient();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateStep = async () => {
      if (!isConnected) {
        changeStep(1);
        return;
      }

      if (isConnected && smartAccount && !delegateSmartAccount) {
        try {
          const isDeployed = await smartAccount.isDeployed();
          changeStep(isDeployed ? 3 : 2);
        } catch (error) {
          console.error("Error checking deployment status:", error);
        }
        return;
      }

      if (isConnected && smartAccount && delegateSmartAccount) {
        const delegation = getDelegation(delegateSmartAccount.address);
        changeStep(delegation ? 5 : 4);
      }
    };

    updateStep();
  }, [isClient, isConnected, smartAccount, delegateSmartAccount, changeStep, getDelegation]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="space-y-8">
      {step === 1 && (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Step 1: Connect Your Wallet</h2>
            <p className="text-blue-700 mb-6">
              Connect your MetaMask wallet to get started. You can customize the Wagmi config to connect to any chain you want,
              and use the connector of your choice.
            </p>
            <ConnectButton />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-6">
          <div className="bg-purple-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-900 mb-4">Step 2: Deploy Delegator Account</h2>
            <p className="text-purple-700 mb-6">
              The MetaMask smart contract account that grants authority. This will be deployed on-chain,
              just in time for redeeming the delegation.
            </p>
            <DeployDelegatorButton />
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-900 mb-4">Step 3: Create Delegate Account</h2>
            <p className="text-green-700 mb-6">
              The MetaMask smart contract account that receives the delegation. Initially this will be counterfactual
              (not deployed on-chain), until it is deployed by submitting a user operation.
            </p>
            <CreateDelegateButton />
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="space-y-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-yellow-900 mb-4">Step 4: Create Delegation</h2>
            <p className="text-yellow-700 mb-6">
              The delegator creates and signs a delegation, granting specific authority to the delegate account.
              In this case, the delegation can be used to perform any transaction on delegator's behalf.
              <br /><br />
              To restrict the delegate account to only perform specific actions,
              the delegator can specify a caveats array in the delegation.
            </p>
            <CreateDelegationButton />
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="space-y-6">
          <div className="bg-red-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-900 mb-4">Step 5: Redeem Delegation</h2>
            <p className="text-red-700 mb-6">
              The redeemer submits a user operation that executes the action allowed by the delegation
              (in this case, transfer nothing to no one) on behalf of the delegator.
            </p>
            <RedeemDelegationButton />
          </div>
        </div>
      )}
    </div>
  );
}
