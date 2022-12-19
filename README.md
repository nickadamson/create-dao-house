# Create DAO House

A repo to bootstrap your own permission-less DAO. This template will get you started with the display of any Erc721 token collection with the inclusion of web3 components so users can connect their wallets and manage NFT's that they own within a specified collection.

## Features

1. uses [NextJS](https://nextjs.org/)
2. uses `Typescript`
3. uses [Tailwind](https://tailwindcss.com/)

## Getting Started

The application accepts the below environment variables, you WILL need to specify the network ID along with either a Curator ID or a Contract Address:

### ENV VARS:

```bash
NEXT_PUBLIC_ALCHEMY_API_KEY=
NEXT_PUBLIC_INFURA_API_KEY=

# token contract address
NEXT_PUBLIC_DAO_TOKEN_ADDRESS=

# nouns | modern | sleek
NEXT_PUBLIC_THEME_STYLE=

# OPTIONAL - leave blank to use DAO Name according to smart contracts
NEXT_PUBLIC_NAVBAR_TITLE=

```

## Develop

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Or click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fourzora%2Fcreate-auction-house&env=NEXT_PUBLIC_APP_TITLE,NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_NETWORK,NEXT_PUBLIC_CURATORS_ID&envDescription=Curator%20ID%20%26%20Network&envLink=https%3A%2F%2Fgithub.com%2Fourzora%2Fauction-house%23curators&project-name=our-auction-house&repo-name=our-auction-house&redirect-url=https%3A%2F%2Fcreate-auction-house.vercel.app)

...Don't forget to add the necessary environment variables!
