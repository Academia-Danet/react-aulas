import { Link } from "react-router-dom";
import { NavBar, Logo, Menu } from "./styles"

function Navbar() {
  return (
    <>
      <NavBar>
        <Logo>FullStack</Logo>
        <nav>
          <Menu>
            <li>
              <Link to="/login" className="error">Login</Link>
            </li>
            <li>
              <a href="#">Registro</a>
            </li>
          </Menu>
        </nav>
      </NavBar>
    </>
  );
}

export default Navbar;
