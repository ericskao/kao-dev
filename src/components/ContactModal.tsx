import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { FORMSPREE_URL } from '../utils/config';
import { CONTACT_FORM_EVENT } from '../utils/contactEvents';

import './ContactModal.scss';

interface ContactModalProps {
  open?: boolean;
  onClose?: () => void;
}

const ContactModal = ({ open: controlledOpen, onClose }: ContactModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const isOpen = controlledOpen ?? internalOpen;

  const close = () => {
    setInternalOpen(false);
    onClose?.();
    if (status === 'success') {
      setName('');
      setEmail('');
      setMessage('');
      setStatus('idle');
    }
  };

  useEffect(() => {
    const handler = () => setInternalOpen(true);
    window.addEventListener(CONTACT_FORM_EVENT, handler);
    return () => window.removeEventListener(CONTACT_FORM_EVENT, handler);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="contact-modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="contact-modal__header">
              <span>~/contact/form.sys</span>
              <button onClick={close} aria-label="Close">
                ✕
              </button>
            </div>

            {status === 'success' ? (
              <div className="contact-modal__success">
                <span className="contact-modal__success-icon">✓</span>
                <p>Message transmitted successfully.</p>
                <p className="contact-modal__success-sub">I&apos;ll get back to you soon.</p>
                <button className="contact-modal__submit" onClick={close}>
                  close
                </button>
              </div>
            ) : (
              <form className="contact-modal__form" onSubmit={onSubmit}>
                <label>
                  <span>name:</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                </label>
                <label>
                  <span>email:</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </label>
                <label>
                  <span>message:</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                  />
                </label>
                {status === 'error' && (
                  <p className="contact-modal__error">
                    transmission failed — check Formspree ID or try again.
                  </p>
                )}
                <button
                  type="submit"
                  className="contact-modal__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'transmitting...' : 'send_message ↗'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
