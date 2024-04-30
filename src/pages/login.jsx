import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const MyForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const [isLogged, setLogged] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // validation des champs du formulaire
    if (email === "email") {
      setEmail(value);
    } else if (email === "password") {
      setnumero_affectation(value);
    }
    const isValid = validateCredentials(email, password);
    if (isValid) {
      setLogged(true); //connexion
    } else {
      //utilisateur n'existe pas
      console.error("utilisateur incorrects");
      //Redirection vers la page d'inscription
      navigation("/register");
    }
  };

  return (
    <>
      <div className=" w-full h-ful flex flex-row gap-10">

        <div className="bg-blue-400 flex flex-col ml-5 mt-2 text-center  border mx-auto rounded w-[80rem] h-[20rem] gap-3 ">
          <h1 className="fond-bold text-2xl mb-3">Congo na biso</h1>
          <h2>DOWNLOAD THE APP</h2>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>
        </div>

        <div className="flex flex-col justify-items-center p-y-4 w-[80rem] h-[20rem] ml-4 gap-6  mr-5">
          <h2 className="fond-bold text-2xl">Connectez- vous à votre compte</h2>
          <span>Vous n'avez pas de compte?<Link className="text-blue-500" to='/register'>S'inscrire</Link> </span>
          <div>
            <form
              handleSubmit={handleSubmit}
              className="flex flex-col text-black bg-white w-full  h-full flex-1 focus:outline-none  gap-10 h-25 w-30 "
            >
              <div className="flex flex-col gap-10 h-25 w-15 text-align: center">
                <input
                  className=" input rounded text-gray-400 border border-blue-700 "
                  type="text"
                  name="Email"
                  defaultValue={email}
                  placeholder="Username"
                />
                 <input
                  className="input rounded text-gray-400 border border-blue-700"
                  type="text"
                  name="Password"
                  defaultValue={password}
                  placeholder="Password"
                />
                <div className="gap-2">
                <button className="bg-blue-400 hover:bg-blue-500  py-1 px-12 rounded ">
                  Se connecter
                </button>
                <span className="text-blue-500 ">Mot de passe oublié</span>
              </div>
              </div> 
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyForm;
