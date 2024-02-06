import ServicesOne from './ServicesOne';
import MenuLink from '../menulink';

const ServicesMain = () => (
  <div className="services-one">
    <div className="block-title text-center">
      <h1>Services</h1>
      <ul className="navbar-nav">
        <MenuLink url="/home" pageName="Home" />
        <MenuLink url="/about_us" pageName="About Us" />
        <MenuLink url="/contacts" pageName="Contacts" />
      </ul>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <ServicesOne />
        </div>
      </div>
    </div>
  </div>
);

export default ServicesMain;
