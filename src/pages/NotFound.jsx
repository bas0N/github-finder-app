import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="h1 text-8xl font-bold mb-8">Ooops!</div>
          <p className="text-5xl mb-8">404 - page not found!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2"></FaHome>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
