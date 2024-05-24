# Carbonable Gasless

This project is a POC to showcase how to use AVNU gasless-sdk to allow your customer to interact with the blockchain without having to pay for gas fees.

## Getting Started
### Prerequisites
Ask AVNU for an API key and set it as an environment variable.

### Environment Variables
NEXT_PUBLIC_NETWORK=sepolia|mainnet
AVNU_API_KEY=your-private-key

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
### Running the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## How to use the example
1. [Mint](https://sepolia.voyager.online/contract/0x075b439cc965cea7e5ac09d7cf15043ad8fe15447423a51bbcb789f8ec659d8c#writeContract) some fake USDC on sepolia network
2. Connect your wallet
3. Click on Sign and Mint

## Going further
You can modify the calls in the useCalls.ts file to interact with the blockchain as you wish.
