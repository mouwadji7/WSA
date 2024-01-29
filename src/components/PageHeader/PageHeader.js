import React from 'react';
import './PageHeader.css';

function PageHeader() {
  return (
    <header id="headerid">
      
        <img src="/image/FotoJet.jpg" alt="LogoSite" />
      
      <nav>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Qui sommes-nous</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>État de ma soumission</a></li>
          <li><a href='#'>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;