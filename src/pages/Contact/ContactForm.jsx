import { useState } from 'react';
import { site } from '@/config/site';

const EMPTY = { name: '', phone: '', email: '', topic: 'General inquiry', message: '' };
const TOPICS = ['General inquiry', 'Book a test drive', 'Sales & pricing', 'Service & support', 'Dealership'];
const recipient = site.contact.find((item) => item.label === 'Mail')?.text ?? '';

// There is no backend for this form yet, so submitting opens the visitor's email app with the message filled in.
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (event) => {
    setSent(false);
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = [`Name: ${values.name}`, `Phone: ${values.phone}`, `Email: ${values.email}`, '', values.message].join('\n');
    const subject = `${values.topic} - ${values.name}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-card contact-form" onSubmit={handleSubmit}>
      <h2 className="contact-section-title">Send us a message</h2>
      <p className="contact-muted">Tell us how we can help and our team will get back to you.</p>

      <div className="contact-form__grid">
        <label className="contact-field">
          <span>Full name*</span>
          <input name="name" value={values.name} onChange={update} required maxLength={120} autoComplete="name" />
        </label>
        <label className="contact-field">
          <span>Phone*</span>
          <input name="phone" type="tel" value={values.phone} onChange={update} required maxLength={30} autoComplete="tel" />
        </label>
        <label className="contact-field">
          <span>Email*</span>
          <input name="email" type="email" value={values.email} onChange={update} required maxLength={160} autoComplete="email" />
        </label>
        <label className="contact-field">
          <span>Topic</span>
          <select name="topic" value={values.topic} onChange={update}>
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label className="contact-field contact-field--wide">
          <span>Message*</span>
          <textarea name="message" rows={5} value={values.message} onChange={update} required maxLength={2000} />
        </label>
      </div>

      <div className="contact-form__footer">
        <button type="submit" className="contact-btn contact-btn--primary">
          Send message
        </button>
        {sent && (
          <p className="contact-form__note" role="status">
            Your email app should open with your message ready to send to {recipient}.
          </p>
        )}
      </div>
    </form>
  );
}
