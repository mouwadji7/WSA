import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axiosConfig from "../../axiosConfig";
import { CONNECTED, setLogin as setUserLogged } from "../../login";

const NOT_EMPTY_ERROR_MESSAGE = "Le champ est requis";

export default function LoginPage({ setLogin, setShowLoginPage }) {
  const [message, setMessage] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [inputsStatus, setInputsStatus] = useState({
    username: { valid: false, errorMessage: "" },
    password: { valid: false, errorMessage: "" }
  });

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setInputsStatus((prevState) => ({ ...prevState, username: { valid: false, errorMessage: NOT_EMPTY_ERROR_MESSAGE } }));
    } else {
      setInputsStatus((prevState) => ({ ...prevState, username: { valid: true, errorMessage: "" } }));
    }
    setCredentials((prevState) => ({ ...prevState, username: value }));
  };

  const handleUserPasswordChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setInputsStatus((prevState) => ({ ...prevState, password: { valid: false, errorMessage: NOT_EMPTY_ERROR_MESSAGE } }));
    } else {
      setInputsStatus((prevState) => ({ ...prevState, password: { valid: true, errorMessage: "" } }));
    }
    setCredentials((prevState) => ({ ...prevState, password: value }));
  };

  const handleAuthFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post("/auth/generateToken", credentials);
      setUserLogged(response.data);
      setLogin({ status: CONNECTED });
    } catch (error) {
      setMessage("Vérifier vos informations de connexion");
      console.error("Erreur lors de l'authentification:", error);
    }
  };

  const shouldDisabled = () => {
    return !(inputsStatus.username.valid && inputsStatus.password.valid);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <section className="border p-4 text-center bg-black text-white">
        <img src="/image/logo.png" alt="notre_logo"  className="mb-4" />
        <h1>Bienvenue à nos employés !</h1>
        <h2>Vous êtes sur le point de commencer votre travail.</h2>
        <p>Vous avez tout le soutien dont vous avez besoin pour réussir.</p>
        <p>Entrez vos informations de connexion pour commencer.</p>
        {message && <Alert variant="danger">{message}</Alert>}
        <Form onSubmit={(e) => handleAuthFormSubmit(e)}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Nom d'utilisateur</Form.Label>
            <Form.Control type="text" value={credentials.username} onChange={handleUserNameChange} />
            {!inputsStatus.username.valid && <Form.Text className="text-danger">{inputsStatus.username.errorMessage}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" value={credentials.password} onChange={handleUserPasswordChange} />
            {!inputsStatus.password.valid && <Form.Text className="text-danger">{inputsStatus.password.errorMessage}</Form.Text>}
          </Form.Group>
          <Button disabled={shouldDisabled()} variant="primary" type="submit">
            S'authentifier
          </Button>
          <Button variant="secondary" onClick={() => setShowLoginPage(false)}>
            Annuler
          </Button>
        </Form>
      </section>
    </div>
  );
}
