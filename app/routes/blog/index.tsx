import type { Route } from './+types/index';
import type { Post, StrapiPost, StrapiProp } from '~/types';
import { useState } from 'react';
import Pagination from '~/component/Pagination';
import PostFilter from '~/component/PostFilter';

import PostCard from '~/component/PostCard';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const jsonData: StrapiProp<StrapiPost> = await res.json();

  const posts = jsonData.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    date: item.date,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }));

  // data.sort((a: PostMeta, b: PostMeta) => {
  //   return new Date(b.date).getTime() - new Date(a.date).getTime();
  // });

  return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  // mathematical query for post per page
  const activePage = 10;
  const totalPages = Math.ceil(posts.length / activePage);
  const indexOfLastPage = currentPage * activePage;
  const indexOfFristPage = indexOfLastPage - activePage;
  // filtering and setting post per prompt
  const filteredPost = posts.filter((post) => {
    const query = searchQuery.toLocaleLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });
  const currentBlogOnPage = filteredPost.slice(
    indexOfFristPage,
    indexOfLastPage
  );

  return (
    <div className='max-w-3xl bg-gray-900 mx-auto px-6 py-6'>
      <h2 className='text-3xl font-white text-bold mb-3'>✍ Blog</h2>
      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />

      {currentBlogOnPage.length > 0 ? (
        currentBlogOnPage.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))
      ) : (
        <p className='text-center mt-12 text-xl text-gray-400'>No Post Found</p>
      )}

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          onPageToShow={(pages) => setCurrentPage(pages)}
          pagesToShow={currentPage}
        />
      )}
    </div>
  );
};

export default BlogPage;
