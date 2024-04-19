 import { useState } from 'react';
import {useNavigate } from "react-router-dom";

const MyForm = () => {
  const [nom, setName] = useState("");
  const [id_agent, setId_Agent] = useState("");
  const navigation = useNavigate();
  const [isLogged, setLogged] = useState(false);
  const validateCredentials = () => {
    if (nom === "Nom") {
      setName(value);
    } else if (nom === "id_agent") {
      setId_Agent(value);
    }
    setConditionVerifiee(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // validation des champs du formulaire
    if (nom === "Nom") {
        setName(value);
      } else if (nom === "id_agent") {
        setId_Agent(value);
      }
    const isValid = validateCredentials(nom, id_agent);
    if (isValid) {
      setLogged(true); //connexion reussie
      //Redirection vers la page d'acceuil
      navigation("/");
    } else {
      //utilisateur n'existe pas
      console.error("utilisateur incorrects");
    }
  };

  return (
    <form
      handleSubmit={handleSubmit}
      className="flex flex-col text-white bg-yellow-500 w-full flex-1 focus:outline-none px-8 gap-3 "
    >
      <span>Veuillez remplire se champ</span>

      <div className="flex items-center  rounded">
        <input
          className=" rounded text-gray-500"
          type="text"
          name="nom"
          defaultValue={nom}
          placeholder="Nom"
        />
      </div>
      <div>
        <input
          className="rounded text-gray-500"
          type="text"
          name="id_agent"
          defaultValue={id_agent}
          placeholder="id_agent"
        />
      </div>
      <div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default MyForm;
