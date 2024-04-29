import { useState } from "react";
import { useForm } from "react-hook-form";



function FormulaireInscription() {
  const initialFormData = {
    numero_affectation: "",
    numero_matricule: "",
    nom: "",
    prenom: "",
    email: "",
    sexe: "",
    etat_civile: "",
    id_service: "",
    id_fonction: "",
    id_grade: "",
    telephone: "",
    statut: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { handleSubmit } = useForm(); // Option pour la validation du formulaire

  const onSubmit = (e) => {
    e.preventDefault();
    const estInscrit = validateCredentials(formData.numero_affectation);

    if (estInscrit) {
      navigate("/login"); // Rediriger vers la page de connexion s'il est déjà inscrit
      return; // Empêcher la soumission ultérieure du formulaire
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" text-black bg-white w-full h-full justify-center items-center"
    >
        
      <div className=" w-300 h-300 flex flex-col justify-center items-center py-24 flex-1 focus:outline-none px-8 gap-3">
        <div>
        <span>Déjà inscrit? </span>
        
        <h1 className="fond-bold">Créer un compte</h1>
        </div>
      
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.numero_affectation}
          onChange={(e) =>
            setFormData({ ...formData, numero_affectation: e.target.value })
          }
          placeholder="numero_affectation"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.numero_matricule}
          onChange={(e) => setFormData({ ...formData, numero_matricule: e.target.value })}
          placeholder="numero_matricule"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          placeholder="Nom"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.prenom}
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          placeholder="prenom"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="email"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.sexe}
          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
          placeholder="sexe"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.etat_civile}
          onChange={(e) =>
            setFormData({ ...formData, etat_civile: e.target.value })
          }
          placeholder="etat_civile"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.telephone}
          onChange={(e) =>
            setFormData({ ...formData, telephone: e.target.value })
          }
          placeholder="telephone"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.id_service}
          onChange={(e) =>
            setFormData({ ...formData, id_service: e.target.value })
          }
          placeholder="id_service"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.id_fonction}
          onChange={(e) =>
            setFormData({ ...formData, id_fonction: e.target.value })
          }
          placeholder="id_fonction"
        />
        <input
          type="text"
          className="rounded text-gray-500 border"
          value={formData.id_grade}
          onChange={(e) =>
            setFormData({ ...formData, id_grade: e.target.value })
          }
          placeholder="id_grade"
        />
        <input
          type="text"
          className="rrounded text-gray-500 border"
          value={formData.statut}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          placeholder="status"
        />
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-14 rounded">
            S'inscrire
          </button>
        </div>
      </div>
    </form>
  );
}
export default FormulaireInscription;
