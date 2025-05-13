'use client';

import { useState } from 'react';
import createDelegatorAccount from '@/utils/createDelegatorAccount';

export default function CreateSmartAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  const handleCreateAccount = async () => {
    try {
      setIsLoading(true);
      const smartAccount = await createDelegatorAccount();
      setAccountAddress(smartAccount.address);
    } catch (error) {
      console.error('Error creating smart account:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Smart Account</h1>
        
        <button
          onClick={handleCreateAccount}
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {isLoading ? 'Creating Account...' : 'Create Smart Account'}
        </button>

        {accountAddress && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm font-medium text-gray-700">Smart Account Address:</p>
            <p className="text-sm text-gray-600 break-all">{accountAddress}</p>
          </div>
        )}
      </div>
    </div>
  );
}
