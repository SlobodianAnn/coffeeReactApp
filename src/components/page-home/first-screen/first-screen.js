import './first-screen.scss';
import beanLine from '../../../img/beans-logo.svg';

const FirstScreen = () => {
  return (
    <div className="firstScreen-wrap">
      <h1>Everything You Love About Coffee </h1>
      <img className="bean-devide" src={beanLine} alt="" />
      <div className="headline">
        We makes every day full of energy and taste <br />
        Want to try our beans?
      </div>
      <a className="more__btn" href="/">
        More
      </a>
    </div>
  );
};

export default FirstScreen;
