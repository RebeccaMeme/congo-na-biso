import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo-RDC.png';
import Home from '../pages/home';
function Header() {
  const handleLogin = () => {
    console.log('Bouton de connexion cliqué !');
  };
  return (
    <div className="  bg-black text-white text-sm  justify-between flex w-full shadow-md">
      <img src={Logo}  alt="" className='ml-20 w-[33px] h-[33px]' />
      <div className="menu flex gap-8 px-20 text-center items-center ">
        <NavLink to={`/${Home}`}>
        <h2 className="page_acceuil">Home</h2>
        </NavLink>
        <NavLink to={`/register`}>
        <h2 className="page_enregistrement">Register</h2>
        </NavLink>
        <NavLink to={`/suivi`}>
        <h2 className="page_suivi">Suivi</h2>
        </NavLink>
        <NavLink to={`/login`}>
        <button
    type="button"
    className="text-white font-bold py-2 px-4 rounded hover:bg-red-700 bg-red-500"
    onClick={handleLogin}
  >
    Se connecter
  </button>
        </NavLink>

        
        
        
      
      </div>
    </div>
  );
}
export default Header;
