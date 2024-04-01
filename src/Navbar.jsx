import PropTypes from "prop-types"; // Import PropTypes

// Navbar component accepting navItems prop
function Navbar({ navItems }) {
  return (
    <nav className="navbar">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={index === 0 ? "nav-item start" : "nav-item end"}
        >
          <img src={item.imgSrc} alt={item.label} />
        </a>
      ))}
    </nav>
  );
}

// Define prop types for Navbar
Navbar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
