import { Component } from 'react';
import './filter.scss';

class Filter extends Component {
  render() {
    const dataBtns = [
      { name: 'All', id: 'all' },
      { name: 'Brazil', id: 'Brazil' },
      { name: 'Kenya', id: 'Kenya' },
      { name: 'Columbia', id: 'Columbia' },
    ];
    const buttons = dataBtns.map((item) => {
      const name = item.name;
      return (
        <button
          key={item.id}
          onClick={() => this.props.onUpdateFilter(name)}
          className="filter__btn"
        >
          {item.name}
        </button>
      );
    });
    return (
      <div className="filter-wrap">
        <div className="filter__label">Or filter </div>
        <div className="filter__btn-wrap">{buttons}</div>
      </div>
    );
  }
}
export default Filter;
