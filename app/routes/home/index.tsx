import type { Route } from './+types/index';
import type { Project, StrapiPost } from '~/types';
import FeaturedProjects from '~/component/FeaturedProject';
import AboutPreview from '~/component/AboutPreview';
import type { StrapiProjects, StrapiProp } from '~/types';
import type { Post } from '~/types';
import LatestPost from '~/component/LatestPost';
import { param } from 'framer-motion/client';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Friendly dev-Portfolio' },
    { name: 'description', content: 'Welcome to my Portfolio' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  // const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`
    ),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`),
  ]);

  if (!projectRes.ok || !postRes) {
    throw new Error('Failed to fetch data');
  }

  // const postJson = await postRes.json();
  const projectJson: StrapiProp<StrapiProjects> = await projectRes.json();
  const postJson: StrapiProp<StrapiPost> = await postRes.json();

  const projects = projectJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    url: item.url,
    category: item.category,
    date: item.date,
    featured: item.featured,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }));
  const posts = postJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    excerpt: item.excerpt,
    date: item.date,
    body: item.body,
    slug: item.slug,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }));
  // console.log(projects, posts);
  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  // console.log(projects, posts);
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPost limit={3} posts={posts} />
    </>
  );
};
export default HomePage;
