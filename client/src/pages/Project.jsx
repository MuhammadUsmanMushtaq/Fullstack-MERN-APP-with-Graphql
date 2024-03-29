import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import DeleteProjectBtn from '../components/DeleteProjectBtn';
import EditProjectForm from '../components/EditProjectForm';
import ClientInfo from '../components/ClientInfo';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../gql_queries/projectQuries';

function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>You got error</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4 mt-4'>
          <div className='d-flex justify-content-between align-items-center'>
            <h1>{data.project.name}</h1>
            <Link to='/' className='btn btn-dark btn-sm w-25'>
              Back
            </Link>
          </div>
          <p>{data.project.description}</p>
          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>
          <ClientInfo key={data.project.id} client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectBtn projectId={data.project.id} />
        </div>
      )}
    </>
  );
}

export default Project;
