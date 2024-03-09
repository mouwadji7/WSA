import React, { useState } from "react";
import PageForm from "./PageForm1";
import PageFormV from "./PageForm2";
import PageDisplay from "./PageDisplay";
import SoumissionFaites from "./SoumissionFaites";
import Principale_Page from "./Principale_Page";
import "./CSSPageContent.css";

const steps = {
  PRINCIPALE: "Principale",
  PAGE_FORM: "PageForm",
  PAGE_FORM_V: "PageFormV",
  FORM_SUBMITTED: "FormSubmitted",
  DISPLAY_CONFIRMED: "DisplayConfirmed",
};

function PageContent() {
  const [currentPage, setCurrentPage] = useState(steps.PRINCIPALE);
  const [formData, setFormData] = useState(null);
  const [formDataV, setFormDataV] = useState(null);

  const handleFormSubmit = (formData) => {
    const newSubmissionReference = generateUniqueReference();
    const submissionData = {
      ...formData,
      submissionReference: newSubmissionReference,
    };

    setFormData(submissionData);
    setCurrentPage(steps.PAGE_FORM_V);
  };

  const handleNavigateToForm = () => {
    setCurrentPage(steps.PAGE_FORM);
  };

  const handleFormSubmitV = (formDataV) => {
    const submissionDataV = {
      ...formDataV,
      submissionReference: formData.submissionReference,
    };

    setFormDataV(submissionDataV);
    setCurrentPage(steps.FORM_SUBMITTED);
  };

  const handleConfirm = () => {
    setCurrentPage(steps.DISPLAY_CONFIRMED);
  };

  const handleCancel = () => {
    setCurrentPage(steps.PRINCIPALE);
    setFormData(null);
    setFormDataV(null);
  };

  const handleModify = () => {
    setCurrentPage(
      currentPage === steps.PAGE_FORM ? steps.PAGE_FORM_V : steps.PAGE_FORM,
    );
  };

  const generateUniqueReference = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleReturnToHome = () => {
    setCurrentPage(steps.PRINCIPALE);
    setFormData(null);
    setFormDataV(null);
  };

  return (
    <div>
      {currentPage === steps.PRINCIPALE && (
        <Principale_Page onNavigateToForm={handleNavigateToForm} />
      )}
      {currentPage === steps.PAGE_FORM && (
        <PageForm onSubmit={handleFormSubmit} />
      )}
      {currentPage === steps.PAGE_FORM_V && (
        <PageFormV onSubmit={handleFormSubmitV} />
      )}
      {currentPage === steps.FORM_SUBMITTED && formDataV && (
        <PageDisplay
          formData={formData}
          formDataV={formDataV}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          onModify={handleModify}
        />
      )}
      {currentPage === steps.DISPLAY_CONFIRMED && formDataV && (
        <SoumissionFaites
          formData={formData}
          formDataV={formDataV}
          submissionReference={formData.submissionReference}
          onReturnToHome={handleReturnToHome}
        />
      )}
    </div>
  );
}

export default PageContent;
