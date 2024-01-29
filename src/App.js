import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import PageAsideLeft from './components/PageAsideLeft/PageAsideLeft';
import PageContent from './components/PageContent/PageContent';
import PageAsideRight from './components/PageAsideRight/PageAsideRight';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
  return (
    <div id="num">
      <PageHeader />

      <div id="pow">
        <PageAsideLeft />
        <PageContent />
        <PageAsideRight />
      </div>

      <PageFooter />
    </div>
  );
}

export default App;
