import Spinner from './Spinner';
import ProjectCard from './ProjectCard';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../gql_queries/projectQuries';

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>some error</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects </p>
      )}
    </>
  );
}

export default Projects;
