import './coffee-card.scss';
import cardImg from '../../img/solimo-card.png';

const CoffeeCard = () => {
  return (
    <div className="coffee__card">
      <img className="coffee-card__img" src={cardImg} alt="coffee" />
      <div className="coffee-card__title">Solimo Coffee Beans 2 kg</div>
      <div className="coffee-card__price">10.73$</div>
    </div>
  );
};

export default CoffeeCard;
