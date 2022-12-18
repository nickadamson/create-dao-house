import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { chains, client } from '../providers/wagmi';
import RootLayout from '../components/layouts/RootLayout';
import DataStoreProvider from '../providers/DataStore';
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <DataStoreProvider defaults={pageProps}>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          {mounted && (
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          )}
        </RainbowKitProvider>
      </WagmiConfig>
    </DataStoreProvider>
  );
}
