import MenuLink from './menulink';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">
        Logo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <MenuLink url="/home" pageName="Home" />
          <MenuLink url="/about_us" pageName="About Us" />
          <MenuLink url="/services" pageName="Services" />
          <MenuLink url="/contacts" pageName="Contacts" />
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
