import { useState } from 'react';
import axios from "axios";

const FormulaireDemandeAbsence = () => {
  const [type_absence, setType_absence] = useState('');
  const [date_debut, setDateDebut] = useState('');
  const [date_fin, setDateFin] = useState('');
  const [statut, setStatut] = useState('');
  const [Numero_affect, setNumero_Affect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // validation des champs du formulaire
    axios
      .get("http://localhost:5000/absences", {
            date_debut: date_debut,
            date_fin: date_fin, 
            type_absence: type_absence,
            statut: statut,
            Numero_affect: Numero_affect
      })
      .then((response) => {
        console.log(response.data);
          
      
      })
      .catch((error) => {
        if (error.response) {
          setMessage(
            error.response.data.message || "l'utilisateur n'existe pas"
          );
        }
      });
    // Valider les données saisies
    // Créer l'objet demandeAbsence
    // Soumettre la demande d'absence à l'aide de la fonction submitDemandeAbsence du contexte
  };

  return (
    <div style={{ padding: 20 }}>
      <Input type= 'text'
        placeholder="Raison de la demande"
        value={type_absence}
        onChangeText={(e) =>setType_absence(e.target.valuet)}
        className="bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full mb-4"
      />
      <Input type= "text"
        placeholder="Date de début"
        value={date_debut}
        onChangeText={(e) => setDateDebut(e.target.value)}
        className="bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full mb-4"
      />
      <Input type="text"
        placeholder="Date de fin"
        value={date_fin}
        onChangeText={(e) => setDateFin(e.target.value)}
        className="bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full mb-4"
      />
      <Input type="text"
        placeholder="statut"
        value={statut}
        onChangeText={(e) => setStatut(e.target.value)}
        className="bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full mb-4"
      />
      <Input type="text"
        placeholder="Numero_affect"
        value={Numero_affect}
        onChangeText={(e) => setNumero_Affect(e.target.value)}
        className="bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full mb-4"
      />
      <Button type="Soumettre" onPress={handleSubmit} />
    </div>
  );
};

export default FormulaireDemandeAbsence;
