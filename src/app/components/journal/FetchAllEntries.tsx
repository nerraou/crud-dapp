"use client";

import { useState } from "react";
import { useJournal } from "../../hooks/useJournal";

export default function FetchAllEntries() {
  const [title, setTitle] = useState("");
  const { entries, fetchEntries, loading } = useJournal();

  console.log(entries);
  return (
    <div>
      <input
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button onClick={() => fetchEntries()}>Fetch Entries</button>

      {loading && <p>Loading...</p>}

      {/* {entries && (

        <div>
          <h3>{entry.title}</h3>
          <p>{entry.message}</p>
        </div>
      )} */}
    </div>
  );
}
