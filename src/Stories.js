import React, { useState } from "react";
export default function Stories({ stories, users, onClose }) {
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index < stories.length - 1) setIndex(index + 1);
    else onClose();
  };
  const story = stories[index];
  const user = users.find(u => u.id === story.userId);
  return (
    <div className="modal stories-modal">
      <img src={story.image} alt="story" />
      <h3 style={{ color: "#c71585" }}>{user.name}</h3>
      <p>{story.caption}</p>
      <button onClick={next}>Next</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
