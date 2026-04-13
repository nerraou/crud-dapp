"use client";

import { useState } from "react";
import { useJournal } from "../../hooks/useJournal";

export default function CreateEntry() {
  const [title, setTitle] = useState("title");
  const [message, setMessage] = useState("hello world");

  const { create } = useJournal();

  const handleCreate = async () => {
    console.log(title, message);

    await create(title, message);
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
