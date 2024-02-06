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
                  We believe in open communication and collaboration. Let's
                  bring your ideas to life!
                </p>
                <div class='social_links'>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'>
                        <i class='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.twitter.com/' target='_blank' rel='noreferrer noopener'>
                        <i class='fab fa-twitter'></i>
                    </a>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
                        <i class='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener'>
                        <i class='fab fa-linkedin-in'></i>
                    </a>
                </div>
              </div>
              <div>
                <form action="#" className="contact-one__form">
                  <div className="row low-gutters">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Write Message"></textarea>
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
