import type { AppProps } from 'next/app';
import '../app/globals.css';
import { WalletProvider } from '../components/wallet_provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}

export default MyApp;
