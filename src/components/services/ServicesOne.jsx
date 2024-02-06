const ServicesOne = () => (
    <div className="services-one">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="services-one__content">
                        <div className="block-title">
                            <p>Our Services</p>
                            <h3>What We Offer</h3>
                        </div>
                        <p className="services-one__text">We offer a wide range of services including web development, mobile app development, e-commerce, and more.</p>
                        <a href="/services" className="thm-btn services-one__btn">Discover More</a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="services-one__images">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="services-one__image">
                                    <img src="assets/images/services-1-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="services-one__image">
                                    <img src="assets/images/services-1-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ServicesOne;