import './info-section.scss';
import infoImg from '../../../img/our-coffee-img.png';
import beansLine from '../../../img/beans-line-black.png';

const InfoSection = () => {
  return (
    <section className="info__section">
      <div className="info__container">
        <img src={infoImg} alt="coffee" />
        <div className="info__txt-wrap">
          <h2>About our beans</h2>
          <img className="beansLine" src={beansLine} alt="beansLine" />
          <div className="info__txt">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. <br />
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. As greatly removed calling
            pleased improve an. Last ask him cold feel met spot shy want.
            Children me laughing we prospect answered followed. At it went is
            song that held help face.
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
