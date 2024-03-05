import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PageForm from './PageForm1';
import PageFormV from './PageForm2';
import PageDisplay from './PageDisplay';
import SoumissionFaites from './SoumissionFaites';
import Principale_Page from './Principale_Page';
import './CSSPageContent.css';

const steps = {
  PRINCIPALE: '/',
  PAGE_FORM: '/pageform',
  PAGE_FORM_V: '/pageformv',
  FORM_SUBMITTED: '/formsubmitted',
  DISPLAY_CONFIRMED: '/displayconfirmed',
};

function PageContent() {
  const [formData, setFormData] = useState(null);
  const [formDataV, setFormDataV] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    const newSubmissionReference = generateUniqueReference();
    const submissionData = { ...formData, submissionReference: newSubmissionReference };

    setFormData(submissionData);
    navigate(steps.PAGE_FORM_V);
  };

  const handleNavigateToForm = () => {
    navigate(steps.PAGE_FORM);
  };

  const handleFormSubmitV = (formDataV) => {
    const submissionDataV = { ...formDataV, submissionReference: formData.submissionReference };

    setFormDataV(submissionDataV);
    navigate(steps.FORM_SUBMITTED);
  };

  const handleConfirm = () => {
    navigate(steps.DISPLAY_CONFIRMED);
  };

  const handleCancel = () => {
    navigate(steps.PRINCIPALE);
    setFormData(null);
    setFormDataV(null);
  };

  const generateUniqueReference = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleReturnToHome = () => {
    navigate(steps.PRINCIPALE);
    setFormData(null);
    setFormDataV(null);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path={steps.PRINCIPALE} element={<Principale_Page onSubmit={handleNavigateToForm} />} />
          <Route path={steps.PAGE_FORM} element={<PageForm onSubmit={handleFormSubmit} />} />
          <Route path={steps.PAGE_FORM_V} element={<PageFormV onSubmit={handleFormSubmitV} />} />
          <Route
            path={steps.FORM_SUBMITTED}
            element={
              <PageDisplay
                formData={formData}
                formDataV={formDataV}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
            }
          />
          <Route
            path={steps.DISPLAY_CONFIRMED}
            element={
              <SoumissionFaites
                formData={formData}
                formDataV={formDataV}
                submissionReference={formData && formData.submissionReference}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default PageContent;