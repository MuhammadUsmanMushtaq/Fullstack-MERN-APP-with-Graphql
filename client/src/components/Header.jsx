import logo from '../assets/logo192.png';
function Header() {
  return (
    <nav className='navbar bg-dark bg-gradient mb-4p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div className='text-light'>Project Mgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
