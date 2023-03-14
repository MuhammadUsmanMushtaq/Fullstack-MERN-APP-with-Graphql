import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROJECT } from '../gql_queries/projectQuries';
import { UPDATE_PROJECT } from '../mutations/projectMutations';

function EditProjectForm({ project }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState('');
  // const [status, setStatus] = useState(() => {
  //   switch (project.status) {
  //     case 'Not Started':
  //       return 'new';
  //     case 'In Progress':
  //       return 'progress';
  //     case 'Completed':
  //       return 'completed';
  //     default:
  //       throw new Error(`Unknown status: ${project.status}`);
  //   }
  // });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const nameHandleChange = (e) => setName(e.target.value);
  const descriptionlHandleChange = (e) => setDescription(e.target.value);
  const statuslHandleChange = (e) => setStatus(e.target.value);

  const handleSubmit = (e) => {
    e.preventDeafault();

    if (!name || !description || !status) {
      return alert('Please fill out all fields');
    }
    updateProject(name, description, status);
  };

  return (
    <div className='mt-4'>
      <h5>Update project </h5>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={nameHandleChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <textarea
            className='form-control'
            id='description'
            value={description}
            onChange={descriptionlHandleChange}
          ></textarea>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Status</label>
          <select
            id='status'
            className='form-select'
            value={status}
            onChange={statuslHandleChange}
          >
            <option value='new'>Not Started</option>
            <option value='progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditProjectForm;
