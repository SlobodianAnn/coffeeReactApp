import './cards-section.scss';
import CoffeeCard from '../../coffee-card/coffee-card';
import Search from '../search/search';
import Filter from '../filter/filter';

const CardsSection = ({ data, onUpdateSearch, onUpdateFilter }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <CoffeeCard key={id} data={itemProps} includeCountry="true" />;
  });

  return (
    <section className="cards__section">
      <div className="search-items-wrapper">
        <Search onUpdateSearch={onUpdateSearch} />
        <Filter onUpdateFilter={onUpdateFilter} />
      </div>
      <div className="cards__wrapper">{elements}</div>
    </section>
  );
};
export default CardsSection;
