"use client";

import { useState } from "react";
import { useJournal } from "../../hooks/useJournal";

export default function FetchEntry() {
  const [title, setTitle] = useState("");
  const { entry, fetchEntry, loading } = useJournal();

  return (
    <div>
      <input
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button onClick={() => fetchEntry(title)}>Fetch Entry</button>

      {loading && <p>Loading...</p>}

      {entry && (
        <div>
          <h3>{entry.title}</h3>
          <p>{entry.message}</p>
        </div>
      )}
    </div>
  );
}
