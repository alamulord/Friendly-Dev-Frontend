import type { Route } from './+types/CardInfo';
import type { Project, StrapiProjects, StrapiProp } from '~/types';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
const VITE_API_URL = import.meta.env.VITE_API_URL;
export async function loader({ request, params }: Route.LoaderArgs) {
  const { documentId } = params;
  const res = await fetch(
    `${VITE_API_URL}/projects?filters[documentId][$eq]=${documentId}&populate=*`
  );
  if (!res.ok) throw new Response('Failed to load data', { status: 404 });

  const json: StrapiProp<StrapiProjects> = await res.json();

  const item = json.data[0];

  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    url: item.url,
    category: item.category,
    date: item.date,
    featured: item.featured,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  };

  return { project };
}

const ProjectInfoCard = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <Link
        to='/projects'
        className='flex items-center text-blue-400 hover:text-blue-500 mb-6 transition'
      >
        <FaArrowLeft className='mr-3' />
        Back to Projects
      </Link>
      <div className='grid md:grid-cols-2 gap-8 items-start'>
        <div>
          <img
            src={project.image}
            alt={project.title}
            className='w-full rounded-lg shadow-md'
          />
        </div>
        <div>
          <h1 className='text-3xl text-blue-400 mb-3 font-semibold'>
            {project.title}
          </h1>
          <p className='text-gray-400 text-sm mb-4'>
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>
          <p className='text-sm text-gray-400 mb-3'>{project.description}</p>
          <a
            href={project.url}
            target='_blank'
            className='inline-block text-white bg-blue-600 rounded hover:bg-blue-700 px-6 py-2 transition'
          >
            View Live Site →
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectInfoCard;
