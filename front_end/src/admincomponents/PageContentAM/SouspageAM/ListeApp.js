import React from "react";

function ListeAppPage() {
  const apps = [
    {
      id: 1,
      name: "Microsoft Word",
      imageUrl: "Microsoft Word image URL",
      link: "#",
    },
    {
      id: 2,
      name: "Microsoft Excel",
      imageUrl: "Microsoft Excel image URL",
      link: "#",
    },
    {
      id: 3,
      name: "Microsoft PowerPoint",
      imageUrl: "Microsoft PowerPoint image URL",
      link: "#",
    },
    {
      id: 4,
      name: "Adobe Photoshop",
      imageUrl: "Adobe Photoshop image URL",
      link: "#",
    },
    {
      id: 5,
      name: "Adobe Illustrator",
      imageUrl: "Adobe Illustrator image URL",
      link: "#",
    },
    {
      id: 6,
      name: "Adobe Premiere Pro",
      imageUrl: "Adobe Premiere Pro image URL",
      link: "#",
    },
    {
      id: 7,
      name: "GitHub",
      imageUrl: "GitHub image URL",
      link: "#",
    },
  ];

  return (
    <main className="container-fluid mt-5 pt-5">
      <h1 className="text-center mb-4">Liste des applications</h1>
      <div className="row">
        {apps.map((app) => (
          <div key={app.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={app.imageUrl} alt={app.name} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{app.name}</h2>
                <a href={app.link} className="btn btn-primary">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ListeAppPage;

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

  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
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
