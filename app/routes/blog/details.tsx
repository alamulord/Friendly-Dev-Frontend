import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { Post, StrapiPost, StrapiProp } from '~/types';
import { Link } from 'react-router';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const json: StrapiProp<StrapiPost> = await res.json();
  if (!json.data.length) throw new Response('Not found', { status: 404 });

  const item = json.data[0];

  const post = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    date: item.date,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  };
  return {
    post,
  };
}

type BlogPostDetailsProp = {
  loaderData: {
    post: Post;
  };
};

const BlogDetailsPage = ({ loaderData }: BlogPostDetailsProp) => {
  const { post } = loaderData;
  return (
    <div className='max-w-3xl mx-auto px-6 py-12 bg-gray-900'>
      <h1 className='text-3xl text-blue-400 mb-2 font-bold'>{post.title}</h1>
      <p className='text-sm mb-6'>{new Date(post.date).toDateString()}</p>
      {post.image && (
        <img
          src={post.image}
          className='w-full mb-4 h-56 object-cover rounded-lg'
        />
      )}
      <div className='prose prose-invert max-w-none mb-12'>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>

      <Link
        to='/blog'
        className='px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg'
      >
        Go back to post
      </Link>
    </div>
  );
};

export default BlogDetailsPage;
