import team from '../../assets/images/about/teamwork.png';
import '../../assets/styles/About.css';

const AboutOne = () => (
  <section className="about-one" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={team} alt="im" className="team" />
        </div>
        <div className="col-md-6">
          <div className="block-title">
            <p>About Us</p>
            <h3>We are Dynamic Team of Digital Solutions Agency</h3>
          </div>
          <h5 className="about-one__text">
            Welcome to VivaStack Tech, where innovation converges with expertise
            to shape the digital landscape.
          </h5>
          <p className="about-one__text">
            We are more than a team; we are a collective force of diverse
            talents, united by a passion for crafting impactful digital
            experiences. In close collaboration with a team of experienced
            developers, we offer services such as marketing virtuosos, UI/UX
            visionaries, code maestros, cybersecurity guardians, and payment
            integration wizards, leading the way in comprehensive digital
            solutions. Together, we embark on a journey to elevate your
            brand&apos;s presence and redefine the digital skies.
          </p>
          <a href="#none" className="thm-btn about-one__btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutOne;
