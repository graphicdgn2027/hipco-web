import { useState } from 'react';

const EMPTY = { name: '', phone: '', email: '', topic: 'General inquiry', message: '' };
const TOPICS = ['General inquiry', 'Book a test drive', 'Sales & pricing', 'Service & support', 'Dealership'];

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (e) => {
    setStatus('idle');
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@hipco.com.np', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `${values.topic} – ${values.name}`,
          _template: 'table',
          Name: values.name,
          Phone: values.phone,
          Email: values.email,
          Topic: values.topic,
          Message: values.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success === 'true' || data.success === true ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="ct-form-card ct-success">
        <div className="ct-success__icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 25l7 7 13-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="ct-success__heading">Message sent!</h2>
        <p className="ct-success__body">
          Thanks, <strong>{values.name}</strong>. We&rsquo;ve received your message and will reply
          to <strong>{values.email}</strong> within one business day.
        </p>
        <button
          className="ct-btn ct-btn--outline"
          onClick={() => { setValues(EMPTY); setStatus('idle'); }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="ct-form-card" onSubmit={handleSubmit} noValidate>
      <h2 className="ct-form-card__heading">Send us a message</h2>
      <p className="ct-form-card__sub">Tell us how we can help — we&rsquo;ll get back to you within one business day.</p>

      <div className="ct-form__grid">
        <label className="ct-field">
          <span>Full name <em>*</em></span>
          <input name="name" value={values.name} onChange={update} required maxLength={120} autoComplete="name" placeholder="Aarav Sharma" />
        </label>

        <label className="ct-field">
          <span>Phone <em>*</em></span>
          <input name="phone" type="tel" value={values.phone} onChange={update} required maxLength={30} autoComplete="tel" placeholder="+977 98XXXXXXXX" />
        </label>

        <label className="ct-field">
          <span>Email <em>*</em></span>
          <input name="email" type="email" value={values.email} onChange={update} required maxLength={160} autoComplete="email" placeholder="you@example.com" />
        </label>

        <label className="ct-field">
          <span>Topic</span>
          <select name="topic" value={values.topic} onChange={update}>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>

        <label className="ct-field ct-field--wide">
          <span>Message <em>*</em></span>
          <textarea name="message" rows={5} value={values.message} onChange={update} required maxLength={2000} placeholder="Tell us what you'd like to know..." />
        </label>
      </div>

      <div className="ct-form__footer">
        <button type="submit" className="ct-btn ct-btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message →'}
        </button>
        {status === 'error' && (
          <p className="ct-form__error" role="alert">
            Something went wrong. Please try again or call +977 971-7101010.
          </p>
        )}
        <p className="ct-form__note">
          Sent directly to <strong>info@hipco.com.np</strong>. We respond within one business day.
        </p>
      </div>
    </form>
  );
}
