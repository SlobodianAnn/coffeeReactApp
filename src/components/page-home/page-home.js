import './page-home.css';
import FirstScreen from './first-screen-section/first-screen';
import AboutUsSection from './about-us-section/about-us-section';
import OurBestSection from './our-best-section/our-best-section';

const Home = () => {
  return (
    <main className="homePage">
      <FirstScreen />
      <AboutUsSection />
      <OurBestSection />
    </main>
  );
};

export default Home;
