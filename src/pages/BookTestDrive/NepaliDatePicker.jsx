import { useState, useEffect, useRef } from 'react';
import NepaliDate from 'nepali-date-converter';

const MONTHS_EN = ['Baisakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
const MONTHS_NP = ['बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज', 'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फाल्गुन', 'चैत'];
const DAYS_EN = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const DAYS_FULL = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function todayBS() {
  return new NepaliDate(new Date());
}

function daysInMonth(year, month) {
  // First day of next month → go back 1 AD day → convert to BS → get day number
  let ny = year, nm = month + 1;
  if (nm > 11) { ny += 1; nm = 0; }
  try {
    const adNext = new NepaliDate(ny, nm, 1).toJsDate();
    adNext.setDate(adNext.getDate() - 1);
    return new NepaliDate(adNext).getDate();
  } catch {
    return 30;
  }
}

function firstWeekday(year, month) {
  try {
    return new NepaliDate(year, month, 1).toJsDate().getDay();
  } catch {
    return 0;
  }
}

function adLabel(adDate) {
  return adDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function NepaliDatePicker({ onChange, label = 'Preferred date (BS)' }) {
  const t = todayBS();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(t.getYear());
  const [viewMonth, setViewMonth] = useState(t.getMonth());
  const [selected, setSelected] = useState(null);
  const wrapRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const total = daysInMonth(viewYear, viewMonth);
  const offset = firstWeekday(viewYear, viewMonth);

  const today = todayBS();
  const isPast = (d) =>
    viewYear < today.getYear() ||
    (viewYear === today.getYear() && viewMonth < today.getMonth()) ||
    (viewYear === today.getYear() && viewMonth === today.getMonth() && d < today.getDate());

  const isSel = (d) =>
    selected &&
    selected.year === viewYear &&
    selected.month === viewMonth &&
    selected.day === d;

  const isToday = (d) =>
    viewYear === today.getYear() &&
    viewMonth === today.getMonth() &&
    d === today.getDate();

  const pick = (day) => {
    if (isPast(day)) return;
    try {
      const adDate = new NepaliDate(viewYear, viewMonth, day).toJsDate();
      const sel = { year: viewYear, month: viewMonth, day, adDate };
      setSelected(sel);
      onChange(sel);
      setOpen(false);
    } catch { /* skip invalid date */ }
  };

  const prev = () => {
    if (viewMonth === 0) { setViewYear((y) => y - 1); setViewMonth(11); }
    else setViewMonth((m) => m - 1);
  };

  const next = () => {
    if (viewMonth === 11) { setViewYear((y) => y + 1); setViewMonth(0); }
    else setViewMonth((m) => m + 1);
  };

  const displayBS = selected
    ? `${MONTHS_EN[selected.month]} ${selected.day}, ${selected.year}`
    : '';
  const displayNP = selected
    ? `${MONTHS_NP[selected.month]} ${selected.day}, ${selected.year}`
    : '';
  const displayAD = selected ? adLabel(selected.adDate) : '';

  return (
    <div className="ndp" ref={wrapRef}>
      <button
        type="button"
        className={`ndp__trigger${open ? ' is-open' : ''}${selected ? ' has-value' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Nepali date picker"
      >
        <svg className="ndp__cal-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2.5" y="3.5" width="15" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2.5 7.5h15" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6.5 1.5v4M13.5 1.5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="ndp__trigger-text">
          {displayBS || <span className="ndp__placeholder">Select date (BS)</span>}
        </span>
        <svg className="ndp__chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {selected && (
        <div className="ndp__badge-row">
          <span className="ndp__badge ndp__badge--np">{displayNP} BS</span>
          <span className="ndp__badge ndp__badge--ad">{displayAD} AD</span>
        </div>
      )}

      {open && (
        <div className="ndp__popup" role="dialog" aria-label="Nepali calendar">
          {/* Header */}
          <div className="ndp__head">
            <button type="button" className="ndp__nav" onClick={prev} aria-label="Previous month">
              <svg viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="ndp__month-info">
              <span className="ndp__month-en">{MONTHS_EN[viewMonth]} {viewYear}</span>
              <span className="ndp__month-np">{MONTHS_NP[viewMonth]} {viewYear}</span>
            </div>
            <button type="button" className="ndp__nav" onClick={next} aria-label="Next month">
              <svg viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          {/* Day labels */}
          <div className="ndp__grid ndp__grid--labels">
            {DAYS_EN.map((d, i) => (
              <span key={i} className={`ndp__label${i === 0 ? ' ndp__label--sun' : ''}`} title={DAYS_FULL[i]}>{d}</span>
            ))}
          </div>

          {/* Day cells */}
          <div className="ndp__grid">
            {Array.from({ length: offset }, (_, i) => <span key={`g-${i}`} />)}
            {Array.from({ length: total }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                type="button"
                className={[
                  'ndp__day',
                  isSel(day) ? 'is-sel' : '',
                  isToday(day) ? 'is-today' : '',
                  isPast(day) ? 'is-past' : '',
                ].filter(Boolean).join(' ')}
                onClick={() => pick(day)}
                disabled={isPast(day)}
                aria-label={`${MONTHS_EN[viewMonth]} ${day}, ${viewYear}`}
                aria-pressed={isSel(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Footer: today shortcut */}
          <div className="ndp__foot">
            <button
              type="button"
              className="ndp__today-btn"
              onClick={() => { setViewYear(today.getYear()); setViewMonth(today.getMonth()); }}
            >
              Today: {MONTHS_EN[today.getMonth()]} {today.getDate()}, {today.getYear()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
