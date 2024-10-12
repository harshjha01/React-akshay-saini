import { Link } from "react-router-dom";
import useOnlineUser from "../utils/useOnlineUser";

const Header = () => {
  const activestatus = useOnlineUser();
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
          alt="logo"
        />
      </div>
      <div className="links">
        <ul>
          <li className="linksli">
            Active stauts : {activestatus ? "🟢" : "🔴"}
          </li>

          <li>
            <Link className="linksli" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="linksli" to="/about">
              About
            </Link>{" "}
          </li>
          <li>
            <Link className="linksli" to="/contact">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
