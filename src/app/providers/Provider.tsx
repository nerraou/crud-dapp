"use client";

import { autoDiscover, createClient } from "@solana/client";
import { SolanaProvider } from "@solana/react-hooks";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

const client = createClient({
  endpoint: "http://localhost:8899",
  websocketEndpoint: "ws://localhost:8900",
  walletConnectors: autoDiscover(),
});

export function Provider({ children }: { children: React.ReactNode }) {
  const wallets = [new PhantomWalletAdapter()];

  return (
    <SolanaProvider client={client}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </SolanaProvider>
  );
}
