import React, { useState } from "react";

export default function Profile({ user, openProfile, allUsers, isOwner }) {
  const [edit, setEdit] = useState(false);
  const [bio, setBio] = useState(user.bio);

  const handleSave = () => {
    setEdit(false);
    // Would save the new bio
  };

  const followingList = allUsers.filter((u) => user.following.includes(u.id));
  const followersList = allUsers.filter((u) => user.followers.includes(u.id));

  return (
    <div className="profile-card">
      <img src={user.avatar} alt={user.name} className="profile-avatar" />
      <h2>{user.name}</h2>
      {edit ? (
        <>
          <textarea value={bio} onChange={e => setBio(e.target.value)} rows="2" />
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p>{bio}</p>
          {isOwner && <button onClick={() => setEdit(true)}>Edit Bio</button>}
        </>
      )}
      <div className="social-info">
        <div>
          <span>{user.posts.length}</span>
          <span>Posts</span>
        </div>
        <div>
          <span>{user.followers.length}</span>
          <span>Followers</span>
        </div>
        <div>
          <span>{user.following.length}</span>
          <span>Following</span>
        </div>
      </div>
      <div className="follow-lists">
        <div>
          <h4>Followers</h4>
          <ul>
            {followersList.map(f => (
              <li key={f.id} onClick={() => openProfile(f.id)} style={{ cursor: "pointer", color: "#9832d3" }}>{f.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Following</h4>
          <ul>
            {followingList.map(f => (
              <li key={f.id} onClick={() => openProfile(f.id)} style={{ cursor: "pointer", color: "#9832d3" }}>{f.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4 style={{ marginTop: "16px" }}>User's Posts</h4>
        <div className="profile-posts">
          {user.posts.map(post => (
            <div key={post.id} className="profile-post-card">
              <img src={post.image} alt="profile content" />
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
