import './about-us-section.scss';
import beanLine from '../../../img/beans-logo.svg';

const AboutUsSection = () => {
  return (
    <section className="aboutUs__section">
      <h2 className="aboutUs__h2">About Us</h2>
      <img className="bean-devide" src={beanLine} alt="beans" />
      <div className="aboutUs__text">
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible. Afraid at highly months do things on at. Situation
        recommend objection do intention so questions. As greatly removed
        calling pleased improve an. Last ask him cold feel met spot shy want.
        Children me laughing we prospect answered followed. At it went is song
        that held help face.
      </div>
      <div className="aboutUs__text">
        Now residence dashwoods she excellent you. Shade being under his bed
        her, Much read on as draw. Blessing for ignorant exercise any yourself
        unpacked. Pleasant horrible but confined day end marriage. Eagerness
        furniture set preserved far recommend. Did even but nor are most gave
        hope. Secure active living depend son repair day ladies now.
      </div>
    </section>
  );
};

export default AboutUsSection;
