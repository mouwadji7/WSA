import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import PageContent from './components/PageContent/PageContent';
import PageFooter from './components/PageFooter/PageFooter';
import PageHeaderAM from './admincomponents/PageHeaderAM/PageHeaderAM';
import PageContentAM from './admincomponents/PageContentAM/PageContentAM';
import PageFooterAM from './admincomponents/PageFooterAM/PageFooterAM';

function App() {
  const login = true; 

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
        <PageHeader />
        <PageContent />
        <PageFooter />
      </div>
    );
  }
}

export default App;