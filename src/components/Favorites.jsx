import { favorites } from '../data/menu';
import Reveal from './Reveal';
import './Favorites.css';

export default function Favorites() {
  return (
    <section className="band">
      <div className="section favorites">
        <Reveal>
          <p className="eyebrow">Regulars Order</p>
          <h2 className="section-heading">Fan favorites</h2>
        </Reveal>

        <div className="favorites-grid">
          {favorites.map((dish, i) => (
            <Reveal key={dish.name} className="favorite-wrap">
              <div
                className="favorite-card"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="favorite-photo">
                  {dish.image ? (
                    <img src={dish.image} alt={dish.name} />
                  ) : (
                    <span className="favorite-photo-placeholder">Photo soon</span>
                  )}
                </div>
                <div className="favorite-body">
                  <h3>{dish.name}</h3>
                  <p>{dish.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
