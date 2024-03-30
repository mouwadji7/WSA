import React from "react";

function RhContact() {
  // Données des employés
  const employees = [
    {
      id: 1,
      nom: "Fall",
      prenom: "Mouhamed",
      email: "mouhamed.fall@mouwadji.com",
      telephone: "123-456-7890",
      disponibilites: "Lundi à Vendredi",
      heures: "9h00 - 17h00",
    },
    {
      id: 2,
      nom: "Barry",
      prenom: "Aissatou",
      email: "aissatou.barry@mouwadji.com",
      telephone: "987-654-3210",
      disponibilites: "Lundi à Vendredi",
      heures: "8h30 - 16h30",
    },
    {
      id: 3,
      nom: "Dioulde Diallo",
      prenom: "Mariama",
      email: "mariama.diouldediallo@mouwadji.com",
      telephone: "456-789-0123",
      disponibilites: "Lundi à Vendredi",
      heures: "10h00 - 18h00",
    },
    {
      id: 4,
      nom: "Sonko",
      prenom: "Mouhamed",
      email: "mouhamed.sonko@mouwadji.com",
      telephone: "789-012-3456",
      disponibilites: "Lundi à Vendredi",
      heures: "8h00 - 16h00",
    },
    {
      id: 5,
      nom: "Oumar",
      prenom: "Cheikh",
      email: "cheikh.oumar@mouwadji.com",
      telephone: "321-654-9870",
      disponibilites: "Lundi à Vendredi",
      heures: "9h30 - 17h30",
    },
    {
      id: 6,
      nom: "Kante",
      prenom: "Issa Boubacar",
      email: "issa.boubacar.kante@mouwadji.com",
      telephone: "654-987-3210",
      disponibilites: "Lundi à Vendredi",
      heures: "8h00 - 16h00",
    },
  ];

  return (
    <main className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Contacts RH</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {employees.map((employee) => (
          <div key={employee.id} className="col">
            <div className="card h-100 border-primary">
              <div className="card-body">
                <h5 className="card-title">
                  {employee.prenom} {employee.nom}
                </h5>
                <p className="card-text">Email: {employee.email}</p>
                <p className="card-text">Téléphone: {employee.telephone}</p>
                <p className="card-text">
                  Disponibilités: {employee.disponibilites}
                </p>
                <p className="card-text">Heures: {employee.heures}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default RhContact;

// Styles CSS
const styles = `
  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .text-center {
    text-align: center;
  }

  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

// Insérer les styles dans la page
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
