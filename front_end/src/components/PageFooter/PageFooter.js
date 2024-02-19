import React from 'react';
import './PageFooter.css';

function PageFooter() {
  return (
    <footer>
            <nav class="navbar navbar-expand-sm bg-black navbar-dark fixed-bottom text-white">
                
                <div class="container-fluid">
                    <div>
                        <img src="/image/logo.png" alt="notre_logo"/>
                    </div>

                    <div class="row">
                        <a class="navbar-brand" href="#">Carriere</a>
                        <a class="navbar-brand" href="#">faire un Dons</a>
                    </div>
                    <div class="row">
                        <a class="navbar-brand" href="#">Qui sommes nous</a>
                        <a class="navbar-brand" href="#">faire un Dons</a>
                    </div>
                    <div class="row">
                        <a class="navbar-brand" href="#">Histoires</a>
                        <a class="navbar-brand" href="#">Donner avis</a>
                    </div>
                    
                    <div class="row">
                        <p ><bold>Addresse Email :</bold> Mouwadjinc.Demenagement@gmail.com</p>
                        <p><bold>Numeros telephone :</bold>614-677-4568 </p>
                    </div>
                </div>
              </nav>
        </footer>
  );
}

export default PageFooter;