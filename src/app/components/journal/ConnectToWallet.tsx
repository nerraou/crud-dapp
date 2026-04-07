"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-phantom";

export default function ConnectToWallet() {
  const wallet = useWallet();

  async function handleSelect() {
    wallet.select(PhantomWalletName);
  }

  async function handleConnect() {
    await wallet.connect();
  }

  return (
    <div>
      <button onClick={handleSelect}>Select</button>

      <button onClick={handleConnect}>Connect</button>
    </div>
  );
}
