import './our-best-section.scss';
import CoffeeCard from '../../coffee-card/coffee-card';

const OurBestSection = () => {
  return (
    <section className="ourBest__section">
      <h2 className="ourBest__h2">Our Best</h2>
      <div className="ourBest__cards">
        <CoffeeCard />
      </div>
    </section>
  );
};

export default OurBestSection;
