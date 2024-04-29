import { useState, useContext } from 'react';

const DataContext = React.createContext();

const App = () => {
  const [heuresTravaillees, setHeuresTravaillees] = useState(0);
  const [demandesAbsence, setDemandesAbsence] = useState([]);
  const [presencesValidees, setPresencesValidees] = useState([]);
  const [rapportsStatistiques, setRapportsStatistiques] = useState([]);
  const [alertes, setAlertes] = useState([]);

  // ... (fonctions pour gérer les fonctionnalités)

  return (
    <DataContext.Provider value={{
      heuresTravaillees, setHeuresTravaillees,
      demandesAbsence, setDemandesAbsence,
      presencesValidees, setPresencesValidees,
      rapportsStatistiques, setRapportsStatistiques,
      alertes, setAlertes,
    }}>
    </DataContext.Provider>
  );
};

const ScannerQRCode = () => {
  const { heuresTravaillees, setHeuresTravaillees } = useContext(DataContext);

  // Fonction de scan QR qui met à jour les heuresTravaillees

  return (
    <div>Scanner QR pour enregistrer les heures travaillées</div>
  );
};

const ConsulterHeuresTravaillees = () => {
  const { heuresTravaillees } = useContext(DataContext);

  return (
    <div>Nombre d'heures prestées: {heuresTravaillees}</div>
  );
};