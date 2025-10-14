import type { Project } from '~/types';
import { Link } from 'react-router';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.documentId}`}
      className='block transform transition delay-300 hover:scale-[1.02]'
    >
      <div className='bg-gray-800 shadow-sm hover:shadow-md transition border border-gray-700 rounded-lg'>
        <img
          src={project.image}
          alt={project.title}
          className='object-cover w-full h-40 rounded-t-lg'
        />
        <div className='p-6'>
          <h1 className='text-3xl font-semibold mb-1 text-blue-400'>
            {project.title}
          </h1>
          <p className='text-sm text-gray-400 mb-3'>{project.description}</p>
          <div className='flex justify-between items-center text-sm text-gray-400'>
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
