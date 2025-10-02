import React from "react";

function generateFeed(users) {
  // Loop the user posts for infinite feel
  const posts = [];
  for (let i = 0; i < 45; i++) {
    const user = users[i % users.length];
    const post = user.posts[i % user.posts.length];
    posts.push({ ...post, user });
  }
  return posts;
}

export default function Feed({ users, openProfile }) {
  const posts = generateFeed(users);

  return (
    <div className="feed">
      {posts.map((post, idx) => (
        <div className="post-card" key={idx}>
          <img src={post.image} alt="post" className="post-img" />
          <div className="post-meta">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="post-avatar"
              onClick={() => openProfile(post.user.id)}
              style={{ cursor: "pointer" }}
            />
            <span onClick={() => openProfile(post.user.id)} style={{ cursor: "pointer", color: "#ba68c8", fontWeight: "bold" }}>
              {post.user.name}
            </span>
            <p className="post-caption">{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
