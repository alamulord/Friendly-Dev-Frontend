import type { Project } from '~/types';
import ProjectCard from './ProjectCard';
type FeaturedProjectProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectProps) => {
  // const filteredProjects = projects.filter((p) => p.featured).slice(0, count);
  if (projects.length === 0) return null;
  return (
    <section>
      <h2 className='text-2xl font-bold mb-6 text-gray-200'>
        Featured Projects
      </h2>

      <div className='grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
