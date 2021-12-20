import './app.css';
import React from 'react';
import { Component, Fragment } from 'react';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Solimo Coffee Beans 2 kg',
          price: 10.73,
          img: '/img/solimo-card.png',
          id: 'solimo1',
          country: 'Brazil',
        },
        {
          name: 'Presto Coffee Beans 1 kg',
          price: 15.99,
          img: '/img/prestro-card.png',
          id: 'presto2',
          country: 'Kenya',
        },
        {
          name: 'AROMISTICO Coffee 1 kg',
          price: 6.99,
          img: '/img/aromistico-card.png',
          id: 'AROMISTICO3',
          country: 'Columbia',
        },
        {
          name: 'Solimo Coffee Beans 2 kg',
          price: 10.73,
          img: '/img/solimo-card.png',
          id: 'solimo4',
          country: 'Brazil',
        },
        {
          name: 'Presto Coffee Beans 1 kg',
          price: 15.99,
          img: '/img/prestro-card.png',
          id: 'presto5',
          country: 'Kenya',
        },
        {
          name: 'AROMISTICO Coffee 1 kg',
          price: 6.99,
          img: '/img/aromistico-card.png',
          id: 'ijAROMISTICO674',
          country: 'Columbia',
        },
      ],
      filter: '',
      term: '',
    };
  }

  filter = (items, term) => {
    switch (term) {
      case 'Brazil':
        return items.filter((item) => item.country === 'Brazil');
      case 'Kenya':
        return items.filter((item) => item.country === 'Kenya');
      case 'Columbia':
        return items.filter((item) => item.country === 'Columbia');
      default:
        return items;
    }
  };

  search = (items, term) => {
    return items.filter((item) => {
      const name = item.name.toLowerCase();
      return name.indexOf(term) > -1;
    });
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter: filter });
  };

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  render() {
    const { data, filter, term } = this.state;
    const visibleData = this.filter(this.search(data, term), filter);
    return (
      <Fragment>
        <Navigation
          onUpdateFilter={this.onUpdateFilter}
          onUpdateSearch={this.onUpdateSearch}
          data={visibleData}
        ></Navigation>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
