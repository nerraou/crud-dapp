"use client";

import * as anchor from "@coral-xyz/anchor";
import { useEffect, useState } from "react";
import { createEntry, getUserEntries, getEntry } from "../lib/crud";

import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Idl from "../idl/crud.json";
import { Crud } from "../idl/crud";
import { PublicKey } from "@solana/web3.js";
import { useProgram } from "./useProgram";

declare const LAMPORTS_PER_SOL = 1000000000;

// interface UseProgramReturn {
//   program: anchor.Program<Crud>;
//   counterAddress: PublicKey;
//   publicKey: PublicKey | null;
//   connected: boolean;
//   connection: anchor.web3.Connection;
// }

export const useJournal = () => {
  const [entry, setEntry] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState<any[]>([]);
  const { program, publicKey } = useProgram();

  const create = async (title: string, message: string) => {
    setLoading(true);
    await createEntry(title, message, program, publicKey);
    setLoading(false);
  };

  const fetchEntry = async (title: string) => {
    setLoading(true);
    const data = await getEntry(title, program, publicKey);
    setEntry(data);
    setLoading(false);
  };

  const fetchEntries = async () => {
    const data = await getUserEntries(program, publicKey);
    setEntries(data);
  };

  return {
    entry,
    create,
    fetchEntry,
    loading,
    entries,
    fetchEntries,
  };
};
