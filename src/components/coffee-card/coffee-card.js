import './coffee-card.scss';

const CoffeeCard = ({ data, includeCountry }) => {
  return (
    <div className="coffee__card">
      <div className="coffee-card__img-wrap">
        <img className="coffee-card__img" src={data.img} alt="coffee" />
      </div>
      <div className="coffee-card__title">{data.name}</div>
      {includeCountry === 'true' && (
        <div className="coffee-card__country">{data.country}</div>
      )}
      <div className="coffee-card__price">{data.price}</div>
    </div>
  );
};

export default CoffeeCard;
