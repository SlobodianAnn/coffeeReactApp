import './our-best-section.scss';
import CoffeeCard from '../../coffee-card/coffee-card';

const OurBestSection = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <CoffeeCard key={id} data={itemProps} />;
  });
  return (
    <section className="ourBest__section">
      <h2 className="ourBest__h2">Our Best</h2>
      <div className="ourBest__cards">{elements}</div>
    </section>
  );
};

export default OurBestSection;
