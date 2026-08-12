import Reveal from './Reveal';
import './LocationHours.css';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
  { day: 'Saturday – Sunday', time: '9:00 AM – 10:00 PM' },
];

export default function LocationHours() {
  return (
    <section className="band band-blush" id="visit">
      <div className="section location">
        <div className="location-grid">
          <Reveal>
            <p className="eyebrow">Find Us</p>
            <h2 className="section-heading">Model Town, Multan</h2>
            <p className="location-address">
              14 Willow Lane, Model Town<br />
              Multan, Punjab
            </p>
            <a
              className="btn btn-outline location-map-link"
              href="https://maps.google.com/?q=Model+Town+Multan"
              target="_blank"
              rel="noopener"
            >
              Get directions
            </a>
          </Reveal>

          <Reveal>
            <p className="eyebrow">Hours</p>
            <ul className="hours-list">
              {hours.map((row) => (
                <li className="hours-row" key={row.day}>
                  <span>{row.day}</span>
                  <span className="hours-time">{row.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
