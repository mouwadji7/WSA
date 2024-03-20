// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import PageContent from './components/PageContent/PageContent';
import PageFooter from './components/PageFooter/PageFooter';
import PageHeaderAM from './admincomponents/PageHeaderAM/PageHeaderAM';
import PageContentAM from './admincomponents/PageContentAM/PageContentAM';
import PageFooterAM from './admincomponents/PageFooterAM/PageFooterAM';
import PageApropos from './components/SousPageFooter/Apropos';
import PageCarriere from './components/SousPageFooter/Carriere';
import PageDon from './components/SousPageFooter/Don';
import PageHistoires from './components/SousPageFooter/Histoires';
import PageVotreAvis from './components/SousPageFooter/VotreAvis';
import PageDisplay from './components/PageContent/PageDisplay';
import PageForm from './components/PageContent/PageForm1';
import PageFormV from './components/PageContent/PageForm2';
import Principale_Page from './components/PageContent/Principale_Page';
import SoumissionFaites from './components/PageContent/SoumissionFaites';

function App() {
  const [login, setLogin] = useState(false); // Initialiser l'état de connexion à false

  const handleLogin = () => {
    setLogin(!login); // Modifier l'état de connexion lors du clic sur le bouton Login
  };

  if (login) {
    return (
      <div>
        <PageHeaderAM onLogin={handleLogin} />
        <PageContentAM />
        <PageFooterAM />
      </div>
    );
  } else {
    return (
      <Router>
        <div>
          <PageHeader onLogin={handleLogin} />
        
          <Routes>

            {/* Routes des elements de pagecontent start */}

            <Route path="/" element={<Principale_Page/>} />
            <Route path="/form" element={<PageForm />} />
            <Route path="/formv" element={<PageFormV/>} />
            
            <Route path="/display" element={<PageDisplay/>} />
            <Route path="/confirmed" element={<SoumissionFaites/>} />

            {/* Routes des elements de pagecontent start */}

            <Route path="/apropos" element={<PageApropos />} />
            <Route path="/carriere" element={<PageCarriere />} />
            <Route path="/don" element={<PageDon />} />
            <Route path="/histoires" element={<PageHistoires />} />
            <Route path="/votreavis" element={<PageVotreAvis />} />
          </Routes>
          <PageFooter />
        </div>
      </Router>
    );
  }
}

export default App;