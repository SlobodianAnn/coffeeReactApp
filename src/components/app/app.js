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
        },
        {
          name: 'Presto Coffee Beans 1 kg',
          price: 15.99,
          img: '/img/prestro-card.png',
          id: 'presto2',
        },
        {
          name: 'AROMISTICO Coffee 1 kg',
          price: 6.99,
          img: '/img/aromistico-card.png',
          id: 'AROMISTICO3',
        },
      ],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <Navigation data={data}></Navigation>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
