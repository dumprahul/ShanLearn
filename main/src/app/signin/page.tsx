"use client";
import { useEffect } from "react";
import ConnectButton from "@/components/ConnectButton";
import CreateDelegateButton from "@/components/CreateDelegateButton";
import CreateDelegationButton from "@/components/CreateDelegationButton";
import DeployDelegatorButton from "@/components/DeployDelegatorButton";
import RedeemDelegationButton from "@/components/RedeemDelegationButton";
import useDelegateSmartAccount from "@/hooks/useDelegateSmartAccount";
import useDelegatorSmartAccount from "@/hooks/useDelegatorSmartAccount";
import useStorageClient from "@/hooks/useStorageClient";
import { useAccount } from "wagmi";
import { useStepContext } from "@/hooks/useStepContext";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export default function SignIn() {
  const { step, changeStep } = useStepContext();
  const { isConnected } = useAccount();
  const { smartAccount } = useDelegatorSmartAccount();
  const { smartAccount: delegateSmartAccount } = useDelegateSmartAccount();
  const { getDelegation } = useStorageClient();

  useEffect(() => {
    if (!isConnected) {
      changeStep(1);
    }
    if (isConnected && smartAccount && !delegateSmartAccount) {
      smartAccount.isDeployed().then((isDeployed: boolean) => {
        if (!isDeployed) {
          changeStep(2);
        }
        if (isDeployed) {
          changeStep(3);
        }
      });
    }
    if (isConnected && smartAccount && delegateSmartAccount) {
      const delegation = getDelegation(delegateSmartAccount.address);
      if (!delegation) {
        changeStep(4);
      } else {
        changeStep(5);
      }
    }
  }, [isConnected, smartAccount, delegateSmartAccount]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Ripple className="z-0" mainCircleSize={320} numCircles={7} />
      <main className="relative z-20 flex flex-col items-center justify-center gap-6 px-4 py-16 w-full max-w-lg">
        <AnimatedShinyText shimmerWidth={120} className="text-2xl font-bold text-center mb-2">
          Sign In & Delegate Access
        </AnimatedShinyText>
        {step === 1 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-center text-base text-neutral-700 dark:text-neutral-300">
              The first step is to connect your MetaMask wallet.<br />
              Delegator is the Library Authority that grants access to the library. And the delegatee is you.
            </p>
            <ConnectButton />
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-center text-base text-neutral-700 dark:text-neutral-300">
              The MetaMask smart contract account that grants authority. This will be deployed on-chain, just in time for redeeming the delegation.
            </p>
            <DeployDelegatorButton />
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-center text-base text-neutral-700 dark:text-neutral-300">
              Now you can create a delegatee account. Click the button below to create your delegatee account.
              The MetaMask smart contract account that receives the delegation. Initially this will be counterfactual (not deployed on-chain), until it is deployed by submitting a user operation.
            </p>
            <CreateDelegateButton />
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-center text-base text-neutral-700 dark:text-neutral-300">
              The delegator - Library Authority creates and signs a delegation, granting specific authority to you to access the library. In this case, the delegation can be used to perform any transaction on delegator's behalf.
            </p>
            <CreateDelegationButton />
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-center text-base text-neutral-700 dark:text-neutral-300">
                Now Redeem the delegation by clicking the button below. As easy as that! 
                </p>
            <RedeemDelegationButton />
          </div>
        )}
      </main>
    </div>
  );
} 