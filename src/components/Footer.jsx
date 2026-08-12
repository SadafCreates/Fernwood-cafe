import './Footer.css';

export default function Footer() {
  return (
    <footer className="band band-ink">
      <div className="footer">
        <div className="footer-inner">
          <div>
            <p className="footer-title">Fernwood Cafe</p>
            <p className="footer-tagline">A slow corner in Model Town.</p>
          </div>
          <div className="footer-links">
            <a href="#" onClick={(e) => e.preventDefault()}>WhatsApp</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
          </div>
        </div>
        <p className="footer-credit">
          Design &amp; build by{' '}
          <a href="https://github.com/SadafCreates" target="_blank" rel="noopener">
            Sadaf
          </a>{' '}
          — a portfolio case study, 2026
        </p>
      </div>
    </footer>
  );
}
