import type { Post } from '~/types';
import { Link } from 'react-router';

type LatestPostProps = {
  posts: Post[];
  limit: number;
};

const LatestPost = ({ posts, limit = 3 }: LatestPostProps) => {
  const sorted = [...posts].sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const latestPost = sorted.slice(0, limit);

  return (
    <div className='max-w-6xl mx-auto px-6 py-12'>
      <h1 className='text-2xl text-white font-bold mb-6'>📭 Latest Posts</h1>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {latestPost.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className='block p-4 border border-gray-700 rounded-lg bg-gray-800 hover:shadow-md transition'
          >
            <h3 className='text-lg font-semibold text-blue-400 mb-1'>
              {post.title}
            </h3>
            <p className='text-sm text-gray-300'>{post.excerpt}</p>
            <span className='block mt-3 text-sm text-gray-400'>
              {new Date(post.date).toDateString()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
