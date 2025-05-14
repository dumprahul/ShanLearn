"use client";

import { useGatorContext } from "@/hooks/useGatorContext";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function CreateDelegateButton() {
  const { generateDelegateWallet } = useGatorContext();

  return (
    <ShimmerButton className="w-full mb-2" onClick={generateDelegateWallet}>
      Create your Delegate Wallet
    </ShimmerButton>
  );
}
