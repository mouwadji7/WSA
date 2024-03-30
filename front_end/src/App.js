// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import PageContent from "./components/PageContent/PageContent";
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeaderAM from "./admincomponents/PageHeaderAM/PageHeaderAM";
import PageContentAM from "./admincomponents/PageContentAM/PageContentAM";
import PageFooterAM from "./admincomponents/PageFooterAM/PageFooterAM";
import PageApropos from "./components/SousPageFooter/Apropos";
import PageCarriere from "./components/SousPageFooter/Carriere";
import PageDon from "./components/SousPageFooter/Don";
import PageHistoires from "./components/SousPageFooter/Histoires";
import PageVotreAvis from "./components/SousPageFooter/VotreAvis";
import StatusPage from "./components/SousPageFooter/Statut";
import PaymentPage from "./components/SousPageFooter/Paye";
import PageForm from "./components/PageContent/PageForm1";
import PageFormV from "./components/PageContent/PageForm2";
import PageDisplay from "./components/PageContent/PageDisplay";
import SoumissionFaites from "./components/PageContent/SoumissionFaites";

function App() {
  const [login, setLogin] = useState(false);
  const [selectedPage, setSelectedPage] = useState("AdminHome");
  // Initialiser l'état de connexion à false
  const handleLogin = () => {
    setLogin(!login); // Modifier l'état de connexion lors du clic sur le bouton Login
  };
  if (login) {
    return (
      <div>
        <PageHeaderAM
          onLogin={handleLogin}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <PageContentAM selectedPage={selectedPage} />
        <PageFooterAM
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    );
  } else {
    return (
      <Router>
        <div>
          <PageHeader onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<PageContent />} />
            {/* Routes des elements de pagecontent start */}
            <Route path="/" element={<PageForm />} />
            <Route path="/formv" element={<PageFormV />} />
            <Route path="/display" element={<PageDisplay />} />
            <Route path="/confirmed" element={<SoumissionFaites />} />
            {/* Routes des elements de pagecontent start */}
            <Route path="/apropos" element={<PageApropos />} />
            <Route path="/carriere" element={<PageCarriere />} />
            <Route path="/don" element={<PageDon />} />
            <Route path="/histoires" element={<PageHistoires />} />
            <Route path="/votreavis" element={<PageVotreAvis />} />
            <Route path="/payment" element={<PaymentPage />} />{" "}
            {/* Route de la page de paiement */}
            <Route path="/status" element={<StatusPage />} />{" "}
            {/* Route de la page de statut */}
          </Routes>
          <PageFooter />
        </div>
      </Router>
    );
  }
}
export default App;
