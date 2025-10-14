import type { Route } from './+types/index';
import type { Project } from '~/types';
import type { StrapiProjects, StrapiProp } from '~/types';
import { useState } from 'react';
import ProjectCard from '~/component/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';
import Pagination from '~/component/Pagination';
const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${VITE_API_URL}/projects?populate=*`);
  const json: StrapiProp<StrapiProjects> = await res.json();

  const projects = json.data.map((item) => ({
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

  return {
    projects,
  };
}

const ProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { projects } = loaderData as { projects: Project[] };
  const [pagesToShow, setPagesToShow] = useState(1);

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  const filterCategory =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const currentPages = 10;
  const totalPages = Math.ceil(filterCategory.length / currentPages);

  // getting current projects on a page
  const indexOfLastPage = pagesToShow * currentPages;
  // console.log(indexOfLastPage);
  const indexOfFristPage = indexOfLastPage - currentPages;
  // console.log(indexOfFristPage);
  const currentPojectOnPage = filterCategory.slice(
    indexOfFristPage,
    indexOfLastPage
  );

  return (
    <>
      <h2 className='text-3xl font-white text-bold mb-8'>🚀 Projects</h2>
      <div className='flex flex-wrap gap-3 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setPagesToShow(1);
            }}
            className={`px-3 py-1 cursor-pointer rounded text-sm ${selectedCategory === category ? 'bg-blue-600 text-white' : 'text-gray-200 bg-gray-800'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* listing out items from loadered data (loaderData) */}
      <AnimatePresence mode='wait'>
        <motion.div layout className='grid sm:grid-cols-2 gap-6'>
          {currentPojectOnPage.map((project) => (
            <motion.div layout key={project.id}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        onPageToShow={setPagesToShow}
        pagesToShow={pagesToShow}
        totalPages={totalPages}
      />
    </>
  );
};

export default ProjectPage;
