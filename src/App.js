import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import PageContent from './components/PageContent/PageContent';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
  return (
    <div>
      <PageHeader />
        <PageContent />
      <PageFooter />
    </div>
  );
}

export default App;
