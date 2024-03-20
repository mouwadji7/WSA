import React, { useState } from 'react';

function PaymentPage({ onSubmitPayment }) {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');

  // Textes par défaut pour les champs
  const defaultPaymentAmount = 'Montant à payer (en dollars)';
  const defaultCardNumber = 'Numéro de Carte Bancaire';
  const defaultExpiryDate = 'MM/AA';
  const defaultCvv = 'CVV';
  const defaultReferenceNumber = 'Numéro de Référence de Soumission';

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const paymentData = {
      paymentAmount,
      cardNumber,
      expiryDate,
      cvv,
      referenceNumber,
    };
    onSubmitPayment(paymentData);
  };

  return (
    <main className="container mt-5 pt-5">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Effectuer le Paiement</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-3">
            <h5 className="text-muted mb-2">Saisissez le numéro de référence de votre soumission :</h5>
            <input 
              type="text" 
              id="referenceNumber" 
              value={referenceNumber} 
              onChange={(e) => setReferenceNumber(e.target.value)} 
              className="form-control" 
              placeholder={defaultReferenceNumber}
              required 
            />
          </div>
          <div className="mb-3">
            <h5 className="text-muted mb-2">Montant à payer :</h5>
            <input 
              type="number" 
              id="paymentAmount" 
              value={paymentAmount} 
              onChange={(e) => setPaymentAmount(e.target.value)} 
              className="form-control" 
              placeholder={defaultPaymentAmount}
              required 
            />
          </div>
          <div className="mb-3">
            <h5 className="text-muted mb-2">Saisissez les détails de votre carte bancaire :</h5>
            <input 
              type="text" 
              id="cardNumber" 
              value={cardNumber} 
              onChange={(e) => setCardNumber(e.target.value)} 
              className="form-control" 
              placeholder={defaultCardNumber}
              required 
            />
          </div>
          <div className="row mb-3">
            <div className="col">
              <input 
                type="text" 
                id="expiryDate" 
                value={expiryDate} 
                onChange={(e) => setExpiryDate(e.target.value)} 
                className="form-control" 
                placeholder={defaultExpiryDate}
                required 
              />
            </div>
            <div className="col">
              <input 
                type="text" 
                id="cvv" 
                value={cvv} 
                onChange={(e) => setCvv(e.target.value)} 
                className="form-control" 
                placeholder={defaultCvv}
                required 
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Effectuer le Paiement</button>
        </form>
        <div className="mt-4">
          <p className="text-muted">
            Ne vous inquiétez pas, vos informations de paiement sont sécurisées. Nous sommes là pour vous aider à rendre votre expérience de déménagement aussi fluide que possible !
          </p>
        </div>
      </div>
    </main>
  );
}

export default PaymentPage;
