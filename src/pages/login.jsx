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
      setPassword(value);
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
      <div className=" w-full h-screen flex flex-row gap-10  ">
  

        <div className="mobil bg-[#5E5BFF] text-white text-center flex flex-col ml-5 pl-5 my-5 justify-center  gap-8 rounded w-[80rem]">
          <h1 className="fond-bold text-2xl mb-3">Congo na biso</h1>
          <div className="flex flex-col">
          <h2>DOWNLOAD THE APP</h2>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>

          </div>
        </div>

        <div className="  w-[80rem] rounded mx-4 my-auto gap-8">
        
          <h2 className="text-center text-2xl">Connectez- vous à votre compte</h2>
        
     
            <form
              handleSubmit={handleSubmit}
              className=" flex flex-col gap-8 items-center mt-4"
            >
                <span className="text-center ">Vous n'avez pas de compte?<Link className="text-blue-500" to='/register'>S'inscrire</Link> </span>
                <input
                  className=" input rounded text-gray-400 border border-blue-700 p-6"
                  type="text"
                  name="Email"
                  defaultValue={email}
                  placeholder="Username"
                />
                 <input
                  className="input rounded text-gray-400 border p-6 border-blue-700"
                  type="text"
                  name="Password"
                  defaultValue={password}
                  placeholder="Password"
                />
                <div className="flex justify-center items-center gap-2">
                <button className="bg-[#5E5BFF] hover:bg-blue-500  py-3 px-8 rounded text-white">
                  Se connecter
                </button>
                <a href="" className="text-blue-500 ">Mot de passe oublié</a>
              </div>
             
            </form>

        
          </div>
        </div>
     
    </>
  );
};

export default MyForm;
