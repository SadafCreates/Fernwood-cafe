import Reveal from './Reveal';
import './Gallery.css';

const tiles = [
  { label: 'Window seat', image: 'images/window seat .jpg' },
  { label: 'The espresso bar', image: 'images/espresso bar .jpg' },
  { label: 'Morning light', image: 'images/morning light .jpg' },
  { label: 'Cozy interior', image: 'images/cozy environment .jpg'},
];

export default function Gallery() {
  return (
    <section className="section gallery">
      <Reveal>
        <p className="eyebrow">Around the Cafe</p>
        <h2 className="section-heading">A look inside</h2>
      </Reveal>
      <div className="gallery-grid">
        {tiles.map((tile, i) => (
          <Reveal key={tile.label} className="gallery-wrap">
            <div
              className="gallery-tile"
              data-index={i}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {tile.image && (
                <img src={tile.image} alt={tile.label} className="gallery-tile-img" />
              )}
              <span>{tile.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
