/* eslint-disable react/button-has-type */
import home from '../../assets/images/home/main-image.png';

const Main = () => (
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <h1>Digital solutions for your business</h1>
        <p>
          At our consultancy, we specialize in Digital Marketing, Web
          Development, and Cybersecurity, providing tailored solutions to small
          businesses. Partner with us to enhanve your oline presence and secure
          your digital assets.
        </p>
        <button>More About Us</button>
      </div>
      <div className="col-md-6">
        <img src={home} alt="placeholder" />
      </div>
    </div>
  </div>
);

export default Main;
