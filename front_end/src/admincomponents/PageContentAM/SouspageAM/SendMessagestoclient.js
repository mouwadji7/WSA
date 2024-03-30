import React, { useState } from "react";

function SendMessageToClient() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [objet, setObjet] = useState("");
  const [client, setClient] = useState("");
  const [message, setMessage] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer le message au client
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Objet:", objet);
    console.log("Client:", client);
    console.log("Message:", message);
    console.log("Nom de l'employé:", employeeName);
    console.log("ID de l'employé:", employeeId);
    // Réinitialiser les champs après l'envoi du message
    setObjet("");
    setClient("");
    setMessage("");
    setEmployeeName("");
    setEmployeeId("");
  };

  return (
    <main className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Envoyer un message au client</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="text"
              id="date"
              className="form-control"
              value={date}
              readOnly
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="time" className="form-label">
              Heure:
            </label>
            <input
              type="text"
              id="time"
              className="form-control"
              value={time}
              readOnly
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="objet" className="form-label">
            Objet:
          </label>
          <input
            type="text"
            id="objet"
            className="form-control"
            value={objet}
            onChange={(e) => setObjet(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="client" className="form-label">
            Client:
          </label>
          <input
            type="text"
            id="client"
            className="form-control"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="employeeName" className="form-label">
              Nom de l'employé:
            </label>
            <input
              type="text"
              id="employeeName"
              className="form-control"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="employeeId" className="form-label">
              ID de l'employé:
            </label>
            <input
              type="text"
              id="employeeId"
              className="form-control"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </main>
  );
}

export default SendMessageToClient;

// Styles CSS
const styles = `
  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .text-center {
    text-align: center;
  }

  .form-label {
    font-weight: bold;
  }
`;

// Insérer les styles dans la page
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
