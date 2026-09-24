import { Dropdown, DropdownList, DropdownToggle } from '@/components/ui/Dropdown';

export default function Faq({ title, items }) {
  return (
    <div className="base-container-padding-flex-gap">
      <div className="carousel-header">
        <h2 className="heading-2">
          {title}
          <br />
        </h2>
      </div>
      <div>
        {items.map((item) => (
          <Dropdown key={item.question} className="dropdown">
            <DropdownToggle className="dropdown-toggle">
              <div className="w-icon-dropdown-toggle" />
              <div className="text-block-127">{item.question}</div>
            </DropdownToggle>
            <DropdownList className="dropdown-list">
              <div className="text-block-128">{item.answer}</div>
            </DropdownList>
          </Dropdown>
        ))}
      </div>
    </div>
  );
}
