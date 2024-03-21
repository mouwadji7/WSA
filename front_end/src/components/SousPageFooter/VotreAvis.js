import React, { useState } from 'react';
import './VotreAvis.css';

function VotreAvis() {
    const [avis, setAvis] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');

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
    };

    return (
        <main main class="container mt-5 pt-5">
            <div className="avis-container">
            <h1>Laissez-nous votre avis</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="avis">Votre avis:</label>
                    <textarea id="avis" value={avis} onChange={(e) => setAvis(e.target.value)} required></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
        </main>
        
    );
}

export default VotreAvis;