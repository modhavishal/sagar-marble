import type { Theme } from '@/types';

type BrandProps = {
  href?: string;
  className?: string;
  theme: Theme;
};

export function Brand({
  href = '#top',
  className,
}: BrandProps) {
  const classes = className ? `brand ${className}` : 'brand';

  return (
    <a
      className={classes}
      href={href}
      aria-label="સાગર માર્બલ હોમ"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
      }}
    >
      <img
        className="brand-logo brand-logo-light"
        src="/images/logo.png"
        alt="સાગર માર્બલ"
      />

      <img
        className="brand-logo brand-logo-dark"
        src="/images/dark.png"
        alt="સાગર માર્બલ"
      />
    </a>
  );
}