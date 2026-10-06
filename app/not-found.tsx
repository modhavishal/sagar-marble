import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-grain" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="not-found-content">
        <Link className="brand not-found-brand" href="/" aria-label="Sagar Marble home">
          Sagar <span>Marble</span>
        </Link>
        <p className="not-found-eyebrow">Looks like this slab is missing</p>
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1>We can’t find that page.</h1>
        <p className="not-found-copy">
          The page may have moved or the address may be mistyped. Let’s get you
          back to the stone.
        </p>
        <div className="not-found-actions">
          <Link className="button button-primary" href="/">Back to home</Link>
          <a className="button button-outline" href="/#contact">Contact us</a>
        </div>
        <span className="not-found-location">Sagar Marble <span>·</span> Pata, Gujarat</span>
      </div>
    </main>
  );
}
