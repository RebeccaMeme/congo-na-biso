import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-RDC.png";
import Home from "../pages/home";
function Header() {
  const handleLogin = () => {
    console.log("Bouton de connexion cliqué !");
  };
  const handleInscription = () => {
    console.log("Bouton inscription cliqué ! ");
  };
  return (
    <div className=" fixed bg-black shadow-md text-white text-sm  justify-between flex w-full top-0">
      <img src={Logo} alt="" className="ml-20 w-[33px] h-[33px]" />
      <div className="menu flex gap-8 px-20 text-center items-center">
        <NavLink to={`/${Home}`}>
          <h2 className="page_acceuil hover:text-blue-700 ">Home</h2>
        </NavLink>
        <NavLink to={`/suivi`}>
          <h2 className="page_suivi hover:text-blue-700">Suivi</h2>
        </NavLink>
         <NavLink to={`/login`}>
          <button
            type="button"
            className="text-white font-bold py-2 px-4 rounded hover:text-blue-700 "
            onClick={handleLogin}
          >
            Connexion
          </button>
        </NavLink>
        <NavLink to={`/register`}>
          <button
            type="button"
            className="text-white  bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded "
            onClick={handleInscription}
          > S'inscrire</button>
        </NavLink>
        
      </div>
    </div>
  );
}
export default Header;
