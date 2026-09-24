import { useState } from 'react';
import { downloadFile, submitBrochureLead } from '@/services/brochure';

const FIELDS = [
  { name: 'name', label: 'Name*', placeholder: 'Full Name', type: 'text', gridId: 'w-node-ba768e2c-4ca3-a21e-b5e0-e52aadd2026b-e08398bf' },
  { name: 'mobile', label: 'Mobile Number*', placeholder: 'Mobile Number', type: 'tel', gridId: 'w-node-ba768e2c-4ca3-a21e-b5e0-e52aadd2026f-e08398bf' },
  { name: 'email', label: 'E-Mail*', placeholder: 'E-Mail', type: 'email', gridId: 'w-node-ba768e2c-4ca3-a21e-b5e0-e52aadd20273-e08398bf' },
  { name: 'city', label: 'City*', placeholder: 'City', type: 'text' },
  { name: 'pincode', label: 'Pincode*', placeholder: 'Pincode', type: 'text' },
];

export default function BrochureModal({ open, pdfUrl, variantClassName, onClose }) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setSubmitting(true);
    try {
      await submitBrochureLead(data);
      onClose();
      if (pdfUrl) await downloadFile(pdfUrl);
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div
      id="brochure-modal-wrap"
      className={`brochure-modal-wrap ${variantClassName} w-node-ba768e2c-4ca3-a21e-b5e0-e52aadd20261-e08398bf`}
      style={open ? { display: 'flex' } : undefined}
    >
      <div className="brochure-modal">
        <div className="div-block-298">
          <div className="modal-title">Fill the Form to download the Brochure</div>
          <div>
            <div id="close-modal-x" className="text-block-121" role="button" aria-label="Close" onClick={onClose}>
              ×
            </div>
          </div>
        </div>
        <div className="brochure-form-block w-form">
          {open && (
            <form id="brochure-form" name="email-form" className="brochure-form" onSubmit={handleSubmit}>
              {FIELDS.map((field) => (
                <div key={field.name} id={field.gridId} className="div-block-297">
                  <label htmlFor={field.name} className="field-label">
                    {field.label}
                  </label>
                  <input
                    className="text-field-3 w-input"
                    maxLength={256}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                    required
                  />
                </div>
              ))}
              <div id="w-node-ba768e2c-4ca3-a21e-b5e0-e52aadd2027f-e08398bf">
                By Clicking Submit, you acknowledge that you have read our{' '}
                <a href="https://www.montraelectric.com/privacy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
              </div>
              <label id="w-node-ba768e2c-4ca3-a21e-b5e0-e52aadd20283-e08398bf" className="w-checkbox">
                <input type="checkbox" name="consent" id="consent" required className="w-checkbox-input" />
                <span className="w-form-label">
                  I hereby authorize to send notifications on SMS/ Messages/ Promotions/ Informational Messages.
                </span>
              </label>
              <div id="w-node-ba768e2c-4ca3-a21e-b5e0-e52aadd20287-e08398bf" className="modal-button-row">
                <a id="close-modal" href="#" className="button-38 w-button" onClick={handleCancel}>
                  Cancel
                </a>
                <input
                  type="submit"
                  className="submit-button-3 w-button"
                  value={submitting ? 'Please wait...' : 'Submit & Download'}
                  disabled={submitting}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
