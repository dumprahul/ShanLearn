"use client";

import { useConnect } from "wagmi";

export default function ConnectButton() {
  const { connect, connectors } = useConnect();

  return (
    <div className="flex flex-col gap-4">
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Connect with {connector.name}
        </button>
      ))}
    </div>
  );
}
