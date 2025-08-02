'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
  likes: number;
  author: string;
};

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'First Update!',
    content: 'This is our first forum post. Welcome!',
    likes: 2,
    author: 'admin@site.com',
  },
  {
    id: '2',
    title: 'More Features Coming',
    content: 'We’re working on comments, roles, and themes!',
    likes: 1,
    author: 'mod@site.com',
  },
];

export default function UpdatesPage() {
  const { user, isSignedIn } = useUser();
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const likePost = (id: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const isAdmin = user?.emailAddresses[0].emailAddress === 'admin@site.com';

  return (
    <main className="min-h-screen p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">📢 Latest Updates</h1>

      {isAdmin && (
        <Link
          href="/updates/new"
          className="inline-block mb-6 text-cyan-400 underline hover:text-cyan-300"
        >
          ➕ Post a new update
        </Link>
      )}

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-gray-800 p-4 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="mb-2 text-gray-300">{post.content}</p>
          <p className="text-sm text-gray-400">Posted by {post.author}</p>

          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={() => likePost(post.id)}
              className="text-cyan-400 hover:underline"
              disabled={!isSignedIn}
            >
              ❤️ Like ({post.likes})
            </button>

            <Link
              href={`/updates/${post.id}`}
              className="text-cyan-400 hover:underline"
            >
              💬 Comment
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}

