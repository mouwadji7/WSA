import React from 'react';
import './CSSPageFooterAM.css';

function PageFooterAM() {
  return (
    <footer>
            <nav class="navbar navbar-expand-sm bg-black navbar-dark fixed-bottom text-white">
                
                <div class="container-fluid">
                    <div>
                        <img src="/image/logo.png" alt="notre_logo"/>
                    </div>

                    <div class="row">
                        <a class="navbar-brand" href="#">News |</a>
                        <a class="navbar-brand" href="#">Listes des application pour travaille|</a>
                    </div>
                    <div class="row">
                        <a class="navbar-brand" href="#">RH contact |</a>
                        <a class="navbar-brand" href="#">faire un Rapport |</a>
                    </div>
                    <div class="row">
                        <a class="navbar-brand" href="#">Messages Client |</a>
                        <a class="navbar-brand" href="#">Arborescence de l'entreprises |</a>
                    </div>
                </div>
              </nav>
        </footer>
  );
}

export default PageFooterAM;