// App.js
import React, { useState } from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import PageContent from './components/PageContent/PageContent';
import PageFooter from './components/PageFooter/PageFooter';
import PageHeaderAM from './admincomponents/PageHeaderAM/PageHeaderAM';
import PageContentAM from './admincomponents/PageContentAM/PageContentAM';
import PageFooterAM from './admincomponents/PageFooterAM/PageFooterAM';

function App() {
  const [login, setLogin] = useState(false); // Initialiser l'état de connexion à false

  const handleLogin = () => {
    setLogin(true); // Modifier l'état de connexion lors du clic sur le bouton Login
  };

  if (login) {
    return (
      <div>
        <PageHeaderAM />
        <PageContentAM />
        <PageFooterAM />
      </div>
    );
  } else {
    return (
      <div>
        <PageHeader onLogin={handleLogin} /> 
        <PageContent />
        <PageFooter />
      </div>
    );
  }
}

export default App;