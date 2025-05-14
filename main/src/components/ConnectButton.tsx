"use client";

import { useConnect } from "wagmi";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function ConnectButton() {
  const { connect, connectors } = useConnect();

  return (
    <div className="button-container">
      {connectors.map((connector) => (
        <ShimmerButton
          onClick={() => connect({ connector })}
          key={connector.id}
          className="w-full mb-2"
        >
          Connect with {connector.name}
        </ShimmerButton>
      ))}
    </div>
  );
}
