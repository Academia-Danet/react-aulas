import { NavBar, Logo, Menu } from "./styles"

function Navbar() {
  return (
    <>
      <NavBar>
        <Logo>FullStack</Logo>
        <nav>
          <Menu>
            <li>
              <a href="#" className="error">Login</a>
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
