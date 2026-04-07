"use client";

import { useState } from "react";
import { createEntry, getUserEntries, getEntry } from "../lib/crud";
import { useWallet } from "@solana/react-hooks";

export const useJournal = () => {
  const [entry, setEntry] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState<any[]>([]);
  const wallet = useWallet();

  const create = async (title: string, message: string) => {
    setLoading(true);
    await createEntry(title, message, wallet);
    setLoading(false);
  };

  const fetchEntry = async (title: string) => {
    setLoading(true);
    const data = await getEntry(title, wallet);
    setEntry(data);
    setLoading(false);
  };

  const fetchEntries = async () => {
    const data = await getUserEntries(wallet);
    setEntries(data);
  };

  return { entry, create, fetchEntry, loading, entries, fetchEntries };
};
