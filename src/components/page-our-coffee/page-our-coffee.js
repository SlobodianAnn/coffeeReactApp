import './page-our-coffee.css';
import HeadlineSection from './headline-section/headline-section';
import InfoSection from './info-section/info-section';
import CardsSection from './cards-section/cards-section';

const AboutBeans = ({ data, onUpdateFilter, onUpdateSearch }) => {
  return (
    <main>
      <HeadlineSection />
      <InfoSection />
      <CardsSection
        onUpdateSearch={onUpdateSearch}
        onUpdateFilter={onUpdateFilter}
        data={data}
      />
    </main>
  );
};

export default AboutBeans;
