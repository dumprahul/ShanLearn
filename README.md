# Shanlearn

Empowering global science education through wallet-based access, delegated authority, and AI mentorship—onchain and unstoppable.

---

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-blue?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![OpenAI](https://img.shields.io/badge/OpenAI-API-green?logo=openai)

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

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, SSR, API routes)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MetaMask Delegation Toolkit (DTK)](https://github.com/MetaMask/delegation-toolkit)
- [OpenAI API](https://platform.openai.com/) (Llama 70B via Gaia)
- [Wagmi](https://wagmi.sh/) (wallet integration)
- [Viem](https://viem.sh/) (EVM utilities)
- [React 19](https://react.dev/)

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
