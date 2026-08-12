import './Hero.css';

const WORDS = ['Fernwood', 'Cafe'];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="hero-inner">
        <p className="eyebrow hero-eyebrow">A Slow Corner &mdash; Multan</p>

        <h1 className="hero-title">
          {WORDS.map((word, i) => (
            <span
              className="hero-word"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              key={word}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-tagline">where the coffee waits for you, not the other way around</p>

        <div className="hero-actions">
          <a href="#menu" className="btn btn-sage">See the menu</a>
          <a href="#visit" className="btn btn-outline">Find us</a>
        </div>
      </div>

      <div className="hero-cup" aria-hidden="true">
        <svg viewBox="0 0 120 120" className="cup-svg">
          <path
            className="steam steam-1"
            d="M46 40 C 40 30, 52 24, 46 14"
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            className="steam steam-2"
            d="M62 40 C 56 30, 68 24, 62 14"
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            className="steam steam-3"
            d="M54 40 C 48 32, 58 26, 54 18"
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M30 48 h 52 l -5 34 a 8 8 0 0 1 -8 7 H 43 a 8 8 0 0 1 -8 -7 Z"
            fill="var(--blush)"
          />
          <path
            d="M82 55 h 8 a 9 9 0 0 1 0 18 h -6"
            fill="none"
            stroke="var(--blush)"
            strokeWidth="5"
          />
        </svg>
      </div>
    </section>
  );
}
