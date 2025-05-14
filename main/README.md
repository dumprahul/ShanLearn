# Shanlearn

ShanLearn is a decentralized science library that grants students access through wallet-based delegation—no sign-ups, no pop-ups. Using MetaMask’s Delegation Toolkit, trusted institutions act as delegators, issuing scoped access to students without compromising control.

Once inside, learners explore a rich archive of scientific contents genetrated by GAIA's Decentralized AI agents running. These agents provide unbiased, censorship-resistant guidance—free from corporate agendas or algorithmic bias.

ShanLearn makes science education borderless, unstoppable, and built for a truly global, equitable future.

<img width="937" alt="Screenshot 2025-05-14 at 4 12 16 PM" src="https://github.com/user-attachments/assets/cde7634a-7f7d-4750-9411-a1b80173538c" />

<img width="1440" alt="Screenshot 2025-05-14 at 5 08 01 PM" src="https://github.com/user-attachments/assets/e8f2b466-a5e6-4cfa-a5e8-2ced3c233c95" />
<img width="1440" alt="Screenshot 2025-05-14 at 5 08 16 PM" src="https://github.com/user-attachments/assets/02deac0b-29a0-4e21-a5eb-a6c16a8bf8e4" />
<img width="1440" alt="Screenshot 2025-05-14 at 5 08 44 PM" src="https://github.com/user-attachments/assets/189c0651-f502-404b-a415-50c6f2e41b02" />

## Overview

**Shanlearn** is a decentralized science education platform built with Next.js, Metamask Delegation Toolkit (DTK), and Gaia AI Agents. It enables users to:

- Sign in with their wallet and delegate access securely
- Explore a curated library of science and technology subjects
- Chat with a Physics AI agent (Mr. Cooper) for mentorship and Q&A

## Features

- **Wallet Sign-In & Delegation**: Secure, onchain access using MetaMask and smart contract delegation. Users can connect, deploy, and delegate authority in a guided flow.
- **Library**: Browse a variety of science and technology subjects. Only Physics is currently available for AI-powered exploration; other subjects are marked as "Not Available".
- **Gaia Agent Chat**: Interact with Mr. Cooper, a Physics AI agent, in a modern chat interface. Powered by OpenAI's Llama 70B model via Gaia domains.
- **Modern UI**: Beautiful, responsive design with animated backgrounds, gradients, and smooth transitions. Built with Tailwind CSS and custom components.

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage

- **Sign In:** Click "Get Started" on the home page to connect your MetaMask wallet and delegate access.
- **Library:** After signing in and successful delegation, explore the library. Only the Physics subject is currently enabled for AI chat.
- **AI Agent Chat:** Click "Explore" on the Physics box to chat with Mr. Cooper, the Physics AI agent.

## Folder Structure

```
main/
├── src/
│   ├── app/
│   │   ├── page.tsx         # Landing page
│   │   ├── signin/          # Wallet sign-in and delegation flow
│   │   ├── library/         # Library of subjects
│   │   └── aiagent/         # Gaia Agent chat interface
│   ├── components/          # UI components (buttons, effects, etc.)
│   ├── hooks/               # Custom React hooks (wallet, OpenAI, etc.)
│   ├── providers/           # React context providers for app state
│   └── utils/               # Utility functions
├── public/                  # Static assets
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript config
└── README.md                # This file
```

## Hooks (`src/hooks`)

Custom React hooks for wallet, delegation, OpenAI, and app state logic:

```
src/hooks/
├── gaiaAgentCall.ts              # Handles OpenAI (Gaia Agent) chat API calls
├── useDelegateSmartAccount.ts    # Hook for delegatee smart account logic
├── useDelegatorSmartAccount.ts   # Hook for delegator smart account logic
├── useGatorContext.ts            # Context for delegate wallet generation
├── usePimlicoUtils.ts            # Utilities for Pimlico bundler/paymaster
├── useStepContext.ts             # Stepper context for sign-in flow
├── useStorageClient.ts           # Local storage and delegation management
```

- **gaiaAgentCall.ts**: Integrates with the Gaia Agent (OpenAI) API for chat.
- **useDelegateSmartAccount.ts / useDelegatorSmartAccount.ts**: Manage smart contract wallet logic for both delegator and delegatee.
- **useGatorContext.ts**: Provides context for delegate wallet generation.
- **usePimlicoUtils.ts**: Utility functions for interacting with Pimlico bundler and paymaster services.
- **useStepContext.ts**: Manages the current step in the sign-in/delegation flow.
- **useStorageClient.ts**: Handles local storage and delegation data.

## Providers (`src/providers`)

React context providers for global app state and step management:

```
src/providers/
├── AppProvider.tsx     # Root provider for app-wide context
├── StepProvider.tsx    # Provides step context for sign-in/delegation flow
├── GatorProvider.tsx   # Provides context for delegate wallet generation
```

- **AppProvider.tsx**: Wraps the app with all necessary providers.
- **StepProvider.tsx**: Supplies the current step and step-changing logic for the sign-in flow.
- **GatorProvider.tsx**: Supplies context for delegate wallet creation and management.

## Credits

- Built with [Next.js](https://nextjs.org/), [MetaMask DTK](https://github.com/MetaMask/delegation-toolkit), [OpenAI](https://platform.openai.com/), and [Gaia Agents](https://llama70b.gaia.domains/).
- UI inspired by modern AI chat and science education platforms.

## License

MIT
