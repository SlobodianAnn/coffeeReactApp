import { Component } from 'react';
import './search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({ term: term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <div className="search-wrapper">
        <label className="search__label" htmlFor="search">
          Looking for
        </label>
        <input
          className="search__input"
          onChange={this.onUpdateSearch}
          id="search"
          type="text"
        />
      </div>
    );
  }
}

export default Search;
