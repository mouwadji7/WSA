import React from "react";
import { Link } from "react-router-dom";

function NewsPage() {
  // Données statiques simulées
  const news = [
    {
      id: 1,
      title: "Nouvelle importante",
      content: "Contenu de la nouvelle importante...",
    },
    {
      id: 2,
      title: "Événement à venir",
      content: "Détails de l'événement à venir...",
    },
    {
      id: 3,
      title: "Mise à jour du produit",
      content: "Informations sur la dernière mise à jour du produit...",
    },
    {
      id: 4,
      title: "Conférence de presse",
      content: "Résumé de la conférence de presse récente...",
    },
    {
      id: 5,
      title: "Nouvelle fonctionnalité ajoutée",
      content:
        "Découvrez la nouvelle fonctionnalité que nous avons ajoutée à notre produit...",
    },
    {
      id: 6,
      title: "Rapport financier trimestriel",
      content: "Récapitulatif des résultats financiers du dernier trimestre...",
    },
    {
      id: 7,
      title: "Événement caritatif à venir",
      content:
        "Informations sur l'événement caritatif que nous organisons bientôt...",
    },
    {
      id: 8,
      title: "Témoignages clients",
      content:
        "Lisez ce que nos clients satisfaits ont à dire sur notre produit et service...",
    },
  ];

  return (
    <main className="container-fluid mt-5 pt-5">
      <h1 className="text-center mb-4">Actualités</h1>
      <div className="row">
        {news.map((item) => (
          <div key={item.id} className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default NewsPage;
