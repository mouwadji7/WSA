import React, { useState } from 'react';
import PageEmployeAM from './PageEmployeAM/PageEmployeAM';
import PageVehiculesAM from './PageVehiculesAM/PageVehiculesAM';
import PrincipalePageAM from './PrincipalePageAM'
import PageSoumissionAM from './PageSoumissionAM/PageSoumissionAM';

function PageContentAM({ selectedPage }) {


  return (
    <div>
    {selectedPage === 'AdminHome' && <PrincipalePageAM/>}
    {selectedPage === 'GestionEmployes' && <PageEmployeAM />}
    {selectedPage === 'GestionVehicules' && <PageVehiculesAM />}
    {selectedPage === 'GestionSoumission' && <PageSoumissionAM/>}
    {/* ... */}
  </div>
  );
}

export default PageContentAM;