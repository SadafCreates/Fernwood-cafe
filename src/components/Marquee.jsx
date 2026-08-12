import './Marquee.css';

const ITEMS = [
  'Small batch beans',
  'Baked fresh every morning',
  'Free wifi, unlimited refills of good light',
  'Dog friendly patio',
  'Open every day',
];

export default function Marquee() {
  // Duplicate the list so the CSS animation can loop seamlessly.
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="marquee-dot">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
