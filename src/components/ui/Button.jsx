import { AppLink } from '@/components/ui/AppLink';
import './button.css';

const join = (...parts) => parts.filter(Boolean).join(' ');

/**
 * Design-system button. Renders a link when `href` is set, otherwise a <button>.
 * variants: primary | secondary | inverse | outline-inverse. States: hover, focus-visible, active, disabled, loading.
 */
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  className,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const inactive = disabled || loading;
  const classes = join('ds-btn', `ds-btn--${variant}`, `ds-btn--${size}`, loading && 'is-loading', className);
  const content = (
    <>
      <span className="ds-btn__label">{children}</span>
      {icon}
    </>
  );

  if (href !== undefined) {
    const handleClick = (event) => {
      if (inactive) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };
    return (
      <AppLink
        href={href}
        className={classes}
        onClick={handleClick}
        aria-disabled={inactive || undefined}
        aria-busy={loading || undefined}
        tabIndex={inactive ? -1 : undefined}
        {...rest}
      >
        {content}
      </AppLink>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-busy={loading || undefined} {...rest}>
      {content}
    </button>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
