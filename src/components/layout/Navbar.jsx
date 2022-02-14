import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Navbar({ title }) {
  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="container mx-auto">
        <div className="flex-none">
          <FaGithub className="inline pr-2 text-5xl" />
          <Link to="/" className="font-bold text-3xl align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 ">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-outline mx-2 px-2 ">
              Home
            </Link>
            <Link to="/About" className="btn btn-outline mx-2 px-2">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
