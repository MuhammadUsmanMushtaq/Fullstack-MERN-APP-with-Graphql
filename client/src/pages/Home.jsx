import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';
import Clients from '../components/Clients';

function Home() {
  return (
    <>
      <div className='d-flex mt-4 mb-4 gap-3 justify-content-center'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
}

export default Home;
