import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

export default function AboutIconLink() {
  return (
    <>
      <div className="about-link">
        <p>About me </p>
        <Link to="/about">
          <FaBeer size={50} />
        </Link>
      </div>
      <div className="logo"></div>
    </>
  );
}
