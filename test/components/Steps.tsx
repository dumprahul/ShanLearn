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

const stepsMeta = [
  { label: "Connect Wallet" },
  { label: "Deploy Delegator" },
  { label: "Create Delegate" },
  { label: "Create Delegation" },
  { label: "Redeem Delegation" },
];

export default function Steps() {
  const { step, changeStep } = useStepContext();
  const { isConnected } = useAccount();
  const { smartAccount } = useDelegatorSmartAccount();
  const { smartAccount: delegateSmartAccount } = useDelegateSmartAccount();
  const { getDelegation } = useStorageClient();
  const [isClient, setIsClient] = useState(false);

  // Step icons
  const stepIcons = [
    <svg key="1" className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>,
    <svg key="2" className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>,
    <svg key="3" className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>,
    <svg key="4" className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>,
    <svg key="5" className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /><circle cx="12" cy="12" r="10" /></svg>,
  ];

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
    <section id="steps" className="w-full flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-16">
        {/* Progress Bar */}
        <div className="w-full flex items-center gap-2 mb-12">
          {[1,2,3,4,5].map((s, idx) => (
            <div key={s} className="flex-1 flex flex-col items-center">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-500 ${step >= s ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg' : 'bg-white border-gray-200 text-gray-400'}`}>{stepIcons[idx]}</div>
              {idx < 4 && <div className={`h-1 w-full rounded bg-gradient-to-r from-indigo-400 to-green-400 transition-all duration-500 ${step > s ? 'opacity-100' : 'opacity-30'}`}></div>}
            </div>
          ))}
        </div>
        {/* Steps */}
        {[1, 2, 3, 4, 5].map((s, idx) => (
          step === s && (
            <div key={s} className="animate-fade-in-up">
              <div className="card flex flex-col gap-8 items-center mx-auto">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-100 to-green-100 mb-2 shadow">
                  {stepIcons[idx]}
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-2">
                  Step {s}: {stepsMeta[idx].label}
                </h2>
                {s === 1 && (
                  <>
                    <p className="text-gray-500 text-center font-light text-xl max-w-xl mx-auto mb-8">
                      Connect your MetaMask wallet to get started. You can customize the Wagmi config to connect to any chain you want, and use the connector of your choice.
                    </p>
                    <div className="flex justify-center w-full">
                      <ConnectButton />
                    </div>
                  </>
                )}
                {s === 2 && (
                  <>
                    <p className="text-gray-500 text-center font-light text-xl max-w-xl mx-auto mb-8">
                      The MetaMask smart contract account that grants authority. This will be deployed on-chain, just in time for redeeming the delegation.
                    </p>
                    <div className="flex justify-center w-full">
                      <DeployDelegatorButton />
                    </div>
                  </>
                )}
                {s === 3 && (
                  <>
                    <p className="text-gray-500 text-center font-light text-xl max-w-xl mx-auto mb-8">
                      The MetaMask smart contract account that receives the delegation. Initially this will be counterfactual (not deployed on-chain), until it is deployed by submitting a user operation.
                    </p>
                    <div className="flex justify-center w-full">
                      <CreateDelegateButton />
                    </div>
                  </>
                )}
                {s === 4 && (
                  <>
                    <p className="text-gray-500 text-center font-light text-xl max-w-xl mx-auto mb-8">
                      The delegator creates and signs a delegation, granting specific authority to the delegate account. In this case, the delegation can be used to perform any transaction on delegator's behalf.
                      <br />
                      <br />
                      To restrict the delegate account to only perform specific actions, the delegator can specify a caveats array in the delegation.
                    </p>
                    <div className="flex justify-center w-full">
                      <CreateDelegationButton />
                    </div>
                  </>
                )}
                {s === 5 && (
                  <>
                    <p className="text-gray-500 text-center font-light text-xl max-w-xl mx-auto mb-8">
                      The redeemer submits a user operation that executes the action allowed by the delegation (in this case, transfer nothing to no one) on behalf of the delegator.
                    </p>
                    <div className="flex justify-center w-full">
                      <RedeemDelegationButton />
                    </div>
                  </>
                )}
              </div>
            </div>
          )
        ))}
        <style jsx global>{`
          .animate-fade-in-up {
            animation: fadeInUp 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
