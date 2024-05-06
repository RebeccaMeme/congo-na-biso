import axios from "axios";
import { useState, useEffect } from "react";

const Presence = () => {
  const [presenceData, setPresenceData] = useState([]);

  useEffect(() => {
    // Récupération des données de présence depuis une API ou une base de données
    axios("http://localhost:5000/agents")
      .then((response) => response.json())
      .then((data) => setPresenceData(data));
  }, []);

  const calculateHoursWorkedPerWeek = (id_agent) => {
    const agentsPresence = presenceData.filter(
      (entry) => entry.Id_agent === id_agent
    );
    let totalHours = 0;

    for (const entry of agentsPresence) {
      const hoursWorked = entry.checkOut - entry.checkIn; //calcule le total des heures travaillées pour une seule entrée
      totalHours += hoursWorked;
    }

    return totalHours;
  };

  return (
    <div>
      <h1>Gestion de présence</h1>

      <thead>
        <tr>
          <th>Employé</th>
          <th>Heures prestées par semaine</th>
        </tr>
      </thead>
      <tbody>
        {presenceData.map((data) => (
          <tr key={data.id_agent}>
            <td>{data.nom}</td>
            <td>{calculateHoursWorkedPerWeek(data.id_agent)}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Presence;
