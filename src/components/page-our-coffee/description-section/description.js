import './description.scss';
import beansLine from './../../../img/beans-line-black.png';

const DescriptionBlock = (props) => {
  const { img, name, price, country, description } = props.currentData;

  return (
    <div className="description-wrapper">
      <div className="col__img">
        <img src={img} alt={name} />
      </div>
      <div className="col__txt">
        <div className="descr__name">{name}</div>
        <img src={beansLine} alt="beansLine" />
        <div className="descr__country">Country: {country}</div>
        <div className="descr__txt">Description: {description}</div>
        <div className="descr__price">Price: {price}$</div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
