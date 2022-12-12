import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';

import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains, client } from '../providers/wagmi';

import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <NextHead>
        <title>My wagmi + RainbowKit App</title>
      </NextHead>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          {mounted && <Component {...pageProps} />}
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
