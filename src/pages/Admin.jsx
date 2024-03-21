// AdminPage.js
import React from 'react';
import VictimCasesList from './VictimCasesList'

const Admin = () => {
  return (
    <div>
      <h3>Admin Page</h3>
      <div>
        <div id='victimCases'>
          <VictimCasesList />
        </div>
        <div id='witnessCases'>
        </div>
      </div>
    </div>
  );
};

export default Admin;
