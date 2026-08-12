import { menu } from '../data/menu';
import Reveal from './Reveal';
import './Menu.css';

export default function Menu() {
  return (
    <section className="band band-sage" id="menu">
      <div className="section menu">
        <Reveal>
          <p className="eyebrow">The Menu</p>
          <h2 className="section-heading menu-heading">What's on today</h2>
        </Reveal>

        <div className="menu-columns">
          {menu.map((group, i) => (
            <Reveal key={group.category} className="menu-group-wrap">
              <div
                className="menu-group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="menu-category">{group.category}</h3>
                <ul className="menu-list">
                  {group.items.map((item) => (
                    <li className="menu-item" key={item.name}>
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-dots" aria-hidden="true" />
                      <span className="menu-item-price">Rs {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
