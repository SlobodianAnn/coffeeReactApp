import './coffee-card.scss';

const CoffeeCard = ({ data }) => {
  return (
    <div className="coffee__card">
      <div className="coffee-card__img-wrap">
        <img className="coffee-card__img" src={data.img} alt="coffee" />
      </div>
      <div className="coffee-card__title">{data.name}</div>
      <div className="coffee-card__price">{data.price}</div>
    </div>
  );
};

export default CoffeeCard;
