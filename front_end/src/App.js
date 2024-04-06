// App.js
import React, {useEffect, useState} from "react";
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
import PageLogin, {} from "./admincomponents/PageLogin/PageLogin";
import {isLoged, Logout, CONNECTED, NOT_CONNECTED} from "./login";




function App() {
    const [login, setLogin] = useState({status: NOT_CONNECTED});
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [selectedPage, setSelectedPage] = useState("AdminHome");



    useEffect(() => {
        if (isLoged()) {
            setLogin({status: CONNECTED})
        }else {
            setLogin({status: NOT_CONNECTED})
        }
    }, []);


    const handleAuth = () => {
    setShowLoginPage(true)
    };
    const handleDisconnection = () => {
      Logout();
      setLogin({status: NOT_CONNECTED})
    }

    if (
      login.status === NOT_CONNECTED
       &&
      showLoginPage
    ) {
    return <PageLogin setLogin={setLogin} />
    }

    if ( login.status === NOT_CONNECTED ) {
    return (
        <Router>
          <div>
            <PageHeader onLogin={handleAuth} />
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

    if ( login.status === CONNECTED ) {
    return (
        <div>
          <PageHeaderAM
              onLogin={handleDisconnection}
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
    }

}
export default App;
