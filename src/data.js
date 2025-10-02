// src/data.js
export const users = [
  {
    id: "sparkle-ava",
    name: "Ava Glimmer",
    bio: "Career mentor, yogi, mental health advocate",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    following: ["sparkle-elena", "sparkle-luna"],
    followers: ["sparkle-luna"],
    posts: [
      {
        id: "1",
        image: "https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&w=600",
        caption: "Start your morning with gratitude 🌸 #wellness #mindset"
      },
      {
        id: "2",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=600",
        caption: "Break the glass ceiling. Your career, your way! 💼✨ #career"
      }
    ]
  },
  {
    id: "sparkle-elena",
    name: "Elena Shine",
    bio: "Beauty blogger & self-care enthusiast 💅",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    following: ["sparkle-ava"],
    followers: ["sparkle-ava"],
    posts: [
      {
        id: "3",
        image: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&w=600",
        caption: "Self-love starts with self-care! #beauty #wellbeing"
      }
    ]
  },
  {
    id: "sparkle-luna",
    name: "Luna Peach",
    bio: "Exercise, meditation, happy vibes ✨",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    following: ["sparkle-ava"],
    followers: ["sparkle-ava", "sparkle-elena"],
    posts: [
      {
        id: "4",
        image: "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&w=600",
        caption: "Running is my therapy! #mentalhealth #exercise"
      }
    ]
  }
];

export const stories = [
  {
    userId: "sparkle-elena",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=400",
    caption: "BTS: New beauty tip 💄",
    expiresAt: "2099-12-31T09:00:00Z"
  },
  {
    userId: "sparkle-luna",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&w=400",
    caption: "Morning run done! 🌸",
    expiresAt: "2099-12-31T09:00:00Z"
  }
];

export const dms = [
  {
    from: "sparkle-elena",
    to: "sparkle-ava",
    messages: [
      { text: "Hey Ava! Loved your post today 😍", time: "09:00" },
      { text: "You’re an inspiration!", time: "09:01" }
    ]
  }
];

export const journals = [
  { userId: "sparkle-ava", date: "2025-10-02", mood: "✨ Happy", entry: "Great morning meditation and yoga!" },
  { userId: "sparkle-luna", date: "2025-10-02", mood: "🌸 Grateful", entry: "Felt amazing after my run." }
];
