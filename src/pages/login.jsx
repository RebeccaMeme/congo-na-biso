import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigate();
  const [isLogged, setLogged] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault(); // validation des champs du formulaire
    if (email === "Email") {
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
    <form
      handleSubmit={handleSubmit}
      className="flex flex-col text-black bg-white w-full justify-center items-center h-full flex-1 focus:outline-none  gap-3 "
    >
      <h1 className="fond-bold">Connectez-vous</h1>
      <span>
        Utilisez vos identifiants pour vous
        <br /> connecter
      </span>

      <div className="flex flex-col">
        <input
          className=" rounded text-gray-500 border"
          type="text"
          name="Email"
          defaultValue={Email}
          placeholder="Votre adresse email"
        />
      </div>

      <div className="flex flex-col ">
        <input
          className="rounded text-gray-500 border"
          type="text"
          name="Password"
          defaultValue={Password}
          placeholder="Votre mot de passe"
        />
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700  py-1 px-12 rounded ">
          Se connecter
        </button>
      </div>
      <span className="text-blue-500">Mot de passe oublié</span>
    </form>
  );
};

export default MyForm;
