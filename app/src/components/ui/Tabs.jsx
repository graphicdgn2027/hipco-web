import { createContext, useContext, useState } from 'react';

const TabsContext = createContext({ active: 0, setActive: () => {} });
const join = (...parts) => parts.filter(Boolean).join(' ');

export function Tabs({ className = '', defaultIndex = 0, children }) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={join('w-tabs', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabMenu({ className = '', children }) {
  return (
    <div className={join('w-tab-menu', className)} role="tablist">
      {children}
    </div>
  );
}

export function TabLink({ index, className = '', children }) {
  const { active, setActive } = useContext(TabsContext);
  const selected = active === index;
  const handleClick = (event) => {
    event.preventDefault();
    setActive(index);
  };
  return (
    <a
      href="#"
      className={join('w-tab-link', className, selected && 'w--current')}
      role="tab"
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export function TabContent({ className = '', children }) {
  return <div className={join('w-tab-content', className)}>{children}</div>;
}

// Only the active pane is mounted, so carousels inside inactive panes measure correctly when shown.
export function TabPane({ index, className = '', children }) {
  const { active } = useContext(TabsContext);
  const selected = active === index;
  return (
    <div className={join('w-tab-pane', className, selected && 'w--tab-active')} role="tabpanel">
      {selected ? children : null}
    </div>
  );
}
