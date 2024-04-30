import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function FormulaireInscription() {
  const initialFormData = {
    nom: "",
    prenom: "",
    email: "",
    sexe: "",
    etat_civile: "",
    téléphone: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const { handleSubmit } = useForm(); // Option pour la validation du formulaire

  const onSubmit = (e) => {
    e.preventDefault();
    const estInscrit = validateCredentials(formData);

    if (estInscrit) {
      navigate("/login"); // Rediriger vers la page de connexion s'il est déjà inscrit
      return; // Empêcher la soumission ultérieure du formulaire
    }
  };

  return (
    <>
      <div className=" w-full h-ful flex flex-row gap-10">
        <div className="bg-blue-400 flex flex-col ml-5 mt-2 text-center  border mx-auto rounded w-[40rem] h-[38rem] gap-4 ">
          <h1 className="fond-bold text-2xl mb-3">Congo na biso</h1>
          <h2>DOWNLOAD THE APP</h2>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>
        </div>
        <div className="flex flex-col justify-items-center p-y-4 w-[80rem] h-[20rem] ml-4 gap-6  mr-5">
          <h1 className="fond-bold text-2xl">Créer un compte</h1>
          <span>
            {" "}
            Vous avez dejà un compte?
            <Link className="text-blue-500" to="/login">
              Connectez-vous
            </Link>{" "}
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-black bg-white w-full  h-full flex-1 focus:outline-none  gap-10 h-25 w-30"
          >
            <div className=" flex flex-col gap-10 h-25 w-15 text-align: center">
              <input
                type="text"
                className="input rounded text-gray-400 border border-blue-700 "
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
                placeholder="Nom"
              />
              <input
                type="text"
                className="input rounded text-gray-400 border border-blue-700 "
                value={formData.prenom}
                onChange={(e) =>
                  setFormData({ ...formData, prenom: e.target.value })
                }
                placeholder="prenom"
              />
              <input
                type="text"
                className="input rounded text-gray-400 border border-blue-700 "
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="email"
              />
              <input
                type="text"
                className="input rounded text-gray-400 border border-blue-700 "
                value={formData.sexe}
                onChange={(e) =>
                  setFormData({ ...formData, sexe: e.target.value })
                }
                placeholder="sexe"
              />
              <input
                type="text"
                className="input rounded text-gray-400 border border-blue-700 "
                value={formData.etat_civile}
                onChange={(e) =>
                  setFormData({ ...formData, etat_civile: e.target.value })
                }
                placeholder="etat_civile"
              />
              <input
                type="text"
                className="input rounded text-gray-400 border border-blue-700 "
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                placeholder="telephone"
              />
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-14 rounded">
                  S'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default FormulaireInscription;
