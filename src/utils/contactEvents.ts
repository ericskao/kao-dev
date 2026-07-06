export const CONTACT_OPEN_EVENT = 'kao-dev:open-contact';
export const CONTACT_FORM_EVENT = 'kao-dev:open-contact-form';
export const MATRIX_EVENT = 'kao-dev:matrix-mode';

export const openContactWizard = () => {
  window.dispatchEvent(new CustomEvent(CONTACT_OPEN_EVENT));
};

export const openContactForm = () => {
  window.dispatchEvent(new CustomEvent(CONTACT_FORM_EVENT));
};

export const triggerMatrixMode = () => {
  window.dispatchEvent(new CustomEvent(MATRIX_EVENT));
};
