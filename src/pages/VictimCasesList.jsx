// VictimCasesList.jsx
import React, { useEffect, useState } from 'react';
import VictimCard from './VictimCard';

const VictimCasesList = () => {
  const [victimCases, setVictimCases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/admin/victimCases')
      .then(response => response.json())
      .then(data => {
        setVictimCases(data.data.victimCases);
      });
  }, []);

  return (
    <div className="victim-cases-list">
      {victimCases.map((victimCase) => (
        <VictimCard key={victimCase._id} victimCase={victimCase} />
      ))}
    </div>
  );
};

export default VictimCasesList;
