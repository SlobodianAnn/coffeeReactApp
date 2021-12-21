import { Component } from 'react';
import './coffee-card.scss';

class CoffeeCard extends Component {
  saveData = () => {
    this.props.onClickCard(this.props.data);
  };

  onClickFunctions = () => {
    this.saveData();
    this.props.handleDescriptionBlock();
  };

  render() {
    const { data, includeCountry } = this.props;
    return (
      <div onClick={this.onClickFunctions} className="coffee__card">
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
  }
}

export default CoffeeCard;
