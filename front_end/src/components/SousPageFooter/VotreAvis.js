import React, { useState } from 'react';
import './VotreAvis.css';

function VotreAvis() {
    const [avis, setAvis] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Vous pouvez implémenter ici la logique pour envoyer l'avis à votre backend ou faire d'autres traitements nécessaires
        console.log("Avis:", avis);
        console.log("Nom:", nom);
        console.log("Email:", email);
        // Réinitialiser les champs après la soumission
        setAvis('');
        setNom('');
        setEmail('');
        setSubmitted(true);
    };

    return (
        <main className="container mt-5 pt-5">
            <div className="avis-container">
                <h1 className="text-center mb-4">Partagez votre expérience avec nous</h1>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nom">Votre nom:</label>
                            <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Votre adresse e-mail:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="avis">Partagez votre avis:</label>
                            <textarea id="avis" value={avis} onChange={(e) => setAvis(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                ) : (
                    <div className="submitted-message">
                        <h2>Merci pour votre avis!</h2>
                        <p>Votre retour est extrêmement important pour nous. Chaque avis compte et nous aide à améliorer nos services pour vous offrir une expérience exceptionnelle.</p>
                        <p>Nous apprécions votre confiance et votre soutien continu. Votre satisfaction est notre priorité absolue, et nous sommes toujours là pour vous offrir un service de qualité.</p>
                        <p>Continuez à partager vos expériences avec nous et n'hésitez pas à nous contacter si vous avez besoin de quoi que ce soit. Nous sommes là pour vous!</p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default VotreAvis;
