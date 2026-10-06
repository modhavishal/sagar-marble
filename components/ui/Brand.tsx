type BrandProps = {
  /** Where the wordmark links to. Defaults to the top of the page. */
  href?: string;
  /** Extra classes applied alongside `brand`. */
  className?: string;
};

/**
 * The "Sagar Marble" wordmark. Rendered as a plain anchor on the home page so
 * it scrolls back to the top instead of reloading the route.
 */
export function Brand({ href = '#top', className }: BrandProps) {
  const classes = className ? `brand ${className}` : 'brand';

  return (
    <a className={classes} href={href} aria-label="Sagar Marble home">
      Sagar <span>Marble</span>
    </a>
  );
}
