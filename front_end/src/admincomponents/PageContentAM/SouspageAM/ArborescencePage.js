import { FaTree } from "react-icons/fa"; // Importer l'icône d'arbre de la bibliothèque react-icons
import { useState } from "react";

function ArborescencePage() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <main className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Arborescence de l'entreprise</h1>
      <div className="arborescence">
        <ul className="list-group tree">
          <li className="list-group-item">
            <span className="manager" onClick={toggleExpand}>
              Mouhamed Fall
            </span>
            <img
              src="https://www.pngfind.com/pngs/m/470-4703547_png-lion-lion-logo-png-transparent-png.png"
              alt="Lion"
              className="lion-icon"
            />
            <FaTree className={`tree-icon ${expanded ? "expanded" : ""}`} />
            <ul className={`list-group sub-tree ${expanded ? "expanded" : ""}`}>
              <li className="list-group-item">
                <span className="manager">Aissatou Barry</span>
                <ul className="list-group">
                  <li className="list-group-item">
                    Mouhamed Sonko - Directeur des ventes
                  </li>
                  <li className="list-group-item">
                    Mariama Dioulde Diallo - Responsable des achats
                  </li>
                </ul>
              </li>
              <li className="list-group-item">
                Cheikh Oumar - Responsable des opérations
              </li>
              <li className="list-group-item">
                Issa Boubacar Kanté - Chef du service informatique
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ArborescencePage;
