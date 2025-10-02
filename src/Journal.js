import React, { useState } from "react";
export default function Journal({ user, journals }) {
  const today = new Date().toISOString().slice(0,10);
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("😊");
  const submit = () => {
    if(entry.trim()) alert("Journal saved! (not persistent demo)");
    setEntry("");
  };
  return (
    <div className="journal-block">
      <h4>Daily Journal</h4>
      <div>
        <label>Mood: </label>
        <input value={mood} onChange={e => setMood(e.target.value)} style={{ width: "4em", fontSize: "1.2em" }} />
      </div>
      <textarea value={entry} onChange={e => setEntry(e.target.value)} placeholder="What's on your mind today?" style={{marginTop: 8}} />
      <div>
        <button onClick={submit}>Save</button>
      </div>
      <ul>
        {journals.filter(j=>j.userId===user.id).map(j=>(
          <li key={j.date}>{j.date} <span style={{fontSize:"1.3em"}}>{j.mood}</span>: {j.entry}</li>
        ))}
      </ul>
    </div>
  );
}
