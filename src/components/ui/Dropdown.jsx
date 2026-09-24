import { createContext, useContext, useState } from 'react';

const DropdownContext = createContext({ open: false, setOpen: () => {} });
const join = (...parts) => parts.filter(Boolean).join(' ');

export function Dropdown({ className = '', children }) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className={join('w-dropdown', className)}>{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownToggle({ className = '', children }) {
  const { open, setOpen } = useContext(DropdownContext);
  const toggle = () => setOpen(!open);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  };
  return (
    <div
      className={join('w-dropdown-toggle', className, open && 'w--open')}
      role="button"
      tabIndex={0}
      aria-haspopup="menu"
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}

export function DropdownList({ className = '', children }) {
  const { open } = useContext(DropdownContext);
  return <nav className={join('w-dropdown-list', className, open && 'w--open')}>{children}</nav>;
}
