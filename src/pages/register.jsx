import { useState } from "react";
import { useForm } from "react-hook-form";
function FormulaireInscription() {
  const initialFormData = {
    id_agent: "",
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
  const { handleSubmit } = useForm(); // Optionnel pour la validation du formulaire

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" text-white bg-yellow-500 w-full h-full "
    >
      <div className="bg-blue-700 w-300 h-300 flex flex-col justify-center items-center py-24 flex-1 focus:outline-none px-8 gap-3">
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.id_agent}
          onChange={(e) =>
            setFormData({ ...formData, id_agent: e.target.value })
          }
          placeholder="id_agent"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          placeholder="Nom"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.prenom}
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          placeholder="prenom"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="email"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.sexe}
          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
          placeholder="sexe"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.etat_civile}
          onChange={(e) =>
            setFormData({ ...formData, etat_civile: e.target.value })
          }
          placeholder="etat_civile"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.telephone}
          onChange={(e) =>
            setFormData({ ...formData, telephone: e.target.value })
          }
          placeholder="telephone"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.id_service}
          onChange={(e) =>
            setFormData({ ...formData, id_service: e.target.value })
          }
          placeholder="id_service"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.id_fonction}
          onChange={(e) =>
            setFormData({ ...formData, id_fonction: e.target.value })
          }
          placeholder="id_fonction"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.id_grade}
          onChange={(e) =>
            setFormData({ ...formData, id_grade: e.target.value })
          }
          placeholder="id_grade"
        />
        <input
          type="text"
          className="rounded text-gray-500 px-2 py-1"
          value={formData.statut}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          placeholder="status"
        />
        <div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
}
export default FormulaireInscription;
