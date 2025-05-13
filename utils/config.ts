import { http, createPublicClient } from "viem";
import { createBundlerClient } from "viem/account-abstraction";
import { privateKeyToAccount, generatePrivateKey } from "viem/accounts";
import { sepolia as chain } from "viem/chains";

const transport = http(); 

export const publicClient = createPublicClient({
    chain,
    transport: http()
});

export const bundlerClient = createBundlerClient({
    transport: http("https://public.pimlico.io/v2/1/rpc")
});
  
const privateKey = generatePrivateKey(); 
export const owner = privateKeyToAccount(privateKey);

