import { Component } from 'react';
import './page-our-coffee.css';
import HeadlineSection from './headline-section/headline-section';
import InfoSection from './info-section/info-section';
import CardsSection from './cards-section/cards-section';
import DescriptionBlock from './description-section/description';

class AboutBeans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      currentCardData: '',
    };
  }

  handleDescriptionBlock = () => {
    this.setState({ click: true });
  };

  saveDataOnClick = (currentCardData) => {
    this.setState({ currentCardData: currentCardData });
  };

  render() {
    const { data, onUpdateFilter, onUpdateSearch } = this.props;

    if (!this.state.click) {
      return (
        <main>
          <HeadlineSection />
          <InfoSection />
          <CardsSection
            onUpdateSearch={onUpdateSearch}
            onUpdateFilter={onUpdateFilter}
            saveDataOnClick={this.saveDataOnClick}
            data={data}
            handleDescriptionBlock={this.handleDescriptionBlock}
          />
        </main>
      );
    } else {
      return (
        <main>
          <HeadlineSection />
          <div className="container">
            <DescriptionBlock currentData={this.state.currentCardData} />
          </div>
        </main>
      );
    }
  }
}

export default AboutBeans;
