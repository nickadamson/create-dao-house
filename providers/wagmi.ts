import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
  [
    ...(process.env.NODE_ENV === 'development'
      ? [chain.mainnet]
      : [chain.mainnet]),
  ],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY! }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains };
