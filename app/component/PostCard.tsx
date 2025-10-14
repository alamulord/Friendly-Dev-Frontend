import { Link } from 'react-router';
import type { Post } from '~/types';
const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className='mt-12 mx-auto mb-4 bg-gray-800 px-6 py-6 rounded-lg shadow'>
      <h1 className='text-2xl font-bold text-blue-400'>{post.title}</h1>

      <p className='text-sm mb-2 text-gray-400'>
        {new Date(post.date).toDateString()}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-56 rounded mb-4 object-cover'
        />
      )}
      <p className='text-gray-400 mb-4'>{post.excerpt}</p>

      <Link
        to={`/blog/${post.slug}`}
        className='text-blue-400 text-sm hover:underline'
      >
        Read more
      </Link>
    </article>
  );
};

export default PostCard;
