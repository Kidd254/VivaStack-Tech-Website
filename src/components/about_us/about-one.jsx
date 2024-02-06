const AboutOne = () => (
  <div className="about-one">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-one__content">
            <div className="block-title">
              <h3>About Us</h3>
            </div>
            <h1>We are Dynamic Team of Digital Solutions Agency</h1>
            <h5>
              Welcome to VivaStack Tech, where innovation converges with
              expertise to shape the digital landscape.
            </h5>
            <p>
              We are more than a team; we are a collective force of diverse
              talents, united by a passion for crafting impactful digital
              experiences. In close collaboration with Ethiopian Airlines, our
              team includes digital marketing virtuosos, UI/UX visionaries, code
              maestros, cybersecurity guardians, and payment integration
              wizards, leading the way in comprehensive digital solutions.
              Together, we embark on a journey to elevate your brand's presence
              and redefine the digital skies.
            </p>
            <button className="btn">
              Discover More
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-one__video">
            <img src="assets/images/resources/about-1-1.jpg" alt="" />
            <label htmlFor="video-link" className="about-one__video-label">
              Watch Video
              <a
                id="video-link"
                href="https://www.youtube.com/watch?v=9No-FiEInLA"
                className="about-one__video-btn video-popup"
              >
                <i className="fa fa-play" />
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutOne;
