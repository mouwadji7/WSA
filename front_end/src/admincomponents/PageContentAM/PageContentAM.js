import React from "react";
import PageEmployeAM from "./PageEmployeAM/PageEmployeAM";
import PageVehiculesAM from "./PageVehiculesAM/PageVehiculesAM";
import PrincipalePageAM from "./PrincipalePageAM";
import PageSoumissionAM from "./PageSoumissionAM/PageSoumissionAM";
import NewsPage from "./SouspageAM/News";
import ListeAppPage from "./SouspageAM/ListeApp";
import RhContact from "./SouspageAM/Rhcontact";
import FaireRapport from "./SouspageAM/FaireRapport";
import SendMessageToClient from "./SouspageAM/SendMessagestoclient";
import ArborescencePage from "./SouspageAM/ArborescencePage";

function PageContentAM({ selectedPage }) {
  return (
    <div className=".Left_Right_padding">
      {selectedPage === "AdminHome" && <PrincipalePageAM />}
      {selectedPage === "GestionEmployes" && <PageEmployeAM />}
      {selectedPage === "GestionVehicules" && <PageVehiculesAM />}
      {selectedPage === "GestionSoumission" && <PageSoumissionAM />}
      {/* ... */}
      {selectedPage === "News" && <NewsPage />}
      {selectedPage === "ListeApp" && <ListeAppPage />}
      {selectedPage === "RHContact" && <RhContact />}
      {selectedPage === "FaireRapport" && <FaireRapport />}
      {selectedPage === "MessagesClient" && <SendMessageToClient />}
      {selectedPage === "Arborescence" && <ArborescencePage />}
    </div>
  );
}

export default PageContentAM;
