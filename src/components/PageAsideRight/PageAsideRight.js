import React from 'react';
import './PageAsideRight.css';

function PageAsideRight() {
    return (
        <aside className="right-aside">
          <p className="link">
            Avez-vous déjà soumis un formulaire et souhaitez-vous vérifier l'état ?
          </p>
    
          <p className="link">
            Ou souhaitez-vous payer une soumission déjà effectuée ?
          </p>
    
          <p className="link">
            Souhaitez-vous modifier une soumission déjà soumise ?
          </p>
    
          <p className="link">
            Souhaitez-vous annuler une soumission que vous avez déjà soumise ?
          </p>
    
          <p className="link">
            Souhaitez-vous faire un rapport concernant un service fourni par l'entreprise ?
          </p>
        </aside>
      );
    }
  
  export default PageAsideRight;