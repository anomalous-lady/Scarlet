import React, { useState } from "react";
import "./App.css";
import { users, stories, dms, journals } from "./data";
import Feed from "./Feed";
import Profile from "./Profile";
import Stories from "./Stories";
import Journal from "./Journal";
import DMs from "./DMs";

// Assume "Ava Glimmer" is logged in
const LOGGED_USER = "sparkle-ava";

function App() {
  const [page, setPage] = useState("feed");
  const [selectedProfile, setSelectedProfile] = useState(LOGGED_USER);
  const [showStories, setShowStories] = useState(false);

  const openProfile = (userId) => {
    setSelectedProfile(userId);
    setPage("profile");
  };

  return (
    <div className="sparkly-app">
      <header>
        <h1>Sparkly Social ✨</h1>
        <nav>
          <button onClick={() => setPage("feed")}>Feed</button>
          <button onClick={() => openProfile(LOGGED_USER)}>My Profile</button>
          <button onClick={() => setShowStories(true)}>Stories</button>
          <button onClick={() => setPage("journal")}>Journal</button>
          <button onClick={() => setPage("dms")}>DMs</button>
        </nav>
      </header>
      <main>
        {page === "feed" && <Feed users={users} openProfile={openProfile} />}
        {page === "profile" && (
          <Profile
            user={users.find((u) => u.id === selectedProfile)}
            openProfile={openProfile}
            allUsers={users}
            isOwner={selectedProfile === LOGGED_USER}
          />
        )}
        {page === "journal" && (
          <Journal user={users.find((u) => u.id === LOGGED_USER)} journals={journals} />
        )}
        {page === "dms" && <DMs userId={LOGGED_USER} dms={dms} users={users} />}
        {showStories && (
          <Stories stories={stories} users={users} onClose={() => setShowStories(false)} />
        )}
      </main>
    </div>
  );
}

export default App;
