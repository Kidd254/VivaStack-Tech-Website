/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
const ContactsOne = () => (
  <div>
    <div className="contact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-one__content">
              <div className="block-title">
                <p>Get in Touch</p>
                <p>
                  Reach out to us for any inquiries or to discuss how we can
                  elevate your digital presence. Our team is ready to assist you
                  on your journey to success.
                </p>
                <p>
                  We believe in open communication and collaboration. Let&apos;s
                  bring your ideas to life!
                </p>
                <div className="social_links">
                  <input type="text" id="facebook-link" />
                  <input type="text" id="facebook-link" />
                  <label htmlFor="facebook-link">Facebook</label>
                  <input type="text" id="twitter-link" />
                  <label htmlFor="twitter-link">Twitter</label>
                  <input type="text" id="instagram-link" />
                  <label htmlFor="instagram-link">Instagram</label>
                  <input type="text" id="linkedin-link" />
                  <label htmlFor="linkedin-link">LinkedIn</label>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    id="facebook-link"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    id="twitter-link"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    id="instagram-link"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    id="linkedin-link"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div>
                <form action="#" className="contact-one__form">
                  <div className="row low-gutters">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        id="name-input"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name-input">Your Name</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        id="email-input"
                        placeholder="Email Address"
                      />
                      <label htmlFor="email-input">Email Address</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        id="message-input"
                        placeholder="Write Message"
                      />
                      <label htmlFor="message-input">Write Message</label>
                      <div className="text-left">
                        <button
                          type="submit"
                          className="thm-btn contact-one__btn"
                        >
                          Submit Request
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactsOne;
