const ServicesOne = () => (
  <>
    <section className="services-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h3>How We Can Help?</h3>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-faddd4">
                <i className="flaticon-landing-page" />
              </div>
              <h3>Full-stack website development</h3>
              <p>
                Crafted with responsive and user-friendly design, customized
                UI/UX, and secured with SSL implementation. We also provide
                payment gateway integration and ongoing maintenance and updates.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-cafbf1">
                <i className="flaticon-goal" />
              </div>
              <h3>
                E-commerce Solutions
              </h3>
              <p>
                Elevate your business with e-commerce website development,
                payment integration, product catalog design, user experience
                optimization, and cybersecurity measures. We also offer SEO and
                digital marketing services.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-ddd5fb">
                <i className="flaticon-contract" />
              </div>
              <h3>
                Digital Marketing Strategy
              </h3>
              <p>
                Drive your online presence with market research, SEO
                optimization, content marketing, social media management, email
                campaigns, pay-per-click advertising, and comprehensive
                analytics.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-fcdeee">
                <i className="flaticon-application" />
              </div>
              <h3>
                UI/UX Design and Redesign
              </h3>
              <p>
                Elevate user experiences with UI/UX design, website or app
                redesign, usability testing, accessibility enhancements, user
                journey mapping, and A/B testing for optimal conversion rates.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-c5ebf9">
                <i className="flaticon-seo" />
              </div>
              <h3>
                Cybersecurity Assessment and Implementation

              </h3>
              <p>
                Strengthen your digital defenses with cybersecurity audits,
                vulnerability testing, data encryption, employee training,
                continuous monitoring, and compliance with industry regulations.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-f8fbd5">
                <i className="flaticon-data-recovery" />
              </div>
              <h3>
                Payment Integration and Security

              </h3>
              <p>
                Ensure secure transactions with payment gateway integration, PCI
                DSS compliance, fraud prevention measures, secure
                authentication, authorization, and ongoing support for payment
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="default-animation">
        <div className="shape-img1">
          <img src="/images/shape/12.svg" alt="im" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/13.svg" alt="im" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/14.png" alt="im" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/15.png" alt="im" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/2.png" alt="im" />
        </div>
      </div>
    </section>
  </>
);

export default ServicesOne;
