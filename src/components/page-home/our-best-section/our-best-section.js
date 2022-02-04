import './our-best-section.scss';
import CoffeeCard from '../../coffee-card/coffee-card';

const OurBestSection = ({ data }) => {
  const cutArray = data.slice(0, 3);
  const elements = cutArray.map((item) => {
    const { id, ...itemProps } = item;
    return <a className='card-wrap' href='/about/' key={id}> <CoffeeCard  data={itemProps} includeCountry="false" /></a>;
  });
  return (
    <section className="ourBest__section">
      <h2 className="ourBest__h2">Our Best</h2>
      <div className="ourBest__cards">{elements}</div>
    </section>
  );
};

export default OurBestSection;
