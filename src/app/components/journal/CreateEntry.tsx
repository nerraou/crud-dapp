"use client";

import { useState } from "react";
import { createEntry } from "../../lib/crud";
import { useWallet } from "@solana/wallet-adapter-react";

export default function CreateEntry() {
  const [title, setTitle] = useState("title");
  const [message, setMessage] = useState("hello world");
  const wallet = useWallet();

  const handleCreate = async () => {
    console.log(title, message);
    await createEntry(title, message, wallet);
    alert("Created!");
  };

  return (
    <div>
      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}
