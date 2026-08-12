import './About.css';

export default function About() {
  return (
    <section className="band band-blush">
      <div className="section about">
        <div className="about-grid">
          <div>
            <p className="eyebrow">Since 2021</p>
            <h2 className="section-heading">
              A cafe built for staying a while.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Fernwood started as a single table and a good espresso machine.
              It's grown into a proper corner cafe now, but the idea hasn't
              changed &mdash; slow mornings, soft chairs, and coffee worth
              lingering over. Come for the coffee, stay for the quiet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
