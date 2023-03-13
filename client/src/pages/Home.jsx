import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import Clients from '../components/Clients';

function Home() {
  return (
    <>
      <div className='d-flex mt-4 mb-4 gap-3'>
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}

export default Home;
