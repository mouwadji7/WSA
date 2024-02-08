import React, { useState } from 'react';
import PageEmployeAM from './PageEmployeAM/PageEmployeAM';
import PageVehiculesAM from './PageVehiculesAM/PageVehiculesAM';

function PageContentAM() {
  const [selectedPage, setSelectedPage] = useState('AdminHome');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      {selectedPage === 'AdminHome' && <div>Contenu de la page Admin Home</div>}
      {selectedPage === 'GestionEmployes' && <PageEmployeAM />}
      {selectedPage === 'GestionVehicules' && <PageVehiculesAM />}
      {selectedPage === 'GestionSoumission' && <div>Contenu de la page Gestion Soumission</div>}
      {/* Ajoutez d'autres conditions pour d'autres pages si nécessaire */}
    </div>
  );
}

export default PageContentAM;