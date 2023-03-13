function ProjectCard({ project }) {
  return (
    <>
      <div className='col-md-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='d-flex  align-items-center'>
              <h5 className='card-title'>{project.name}</h5>
              <a href={`/projects/${project.id}`} className='btn btn-light'>
                view
              </a>
            </div>
            <p className='small'>
              Status: <strong>{project.status}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
