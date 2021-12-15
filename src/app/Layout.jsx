import { Link, NavLink, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, NavItem } from "reactstrap";
import Dark from "../components/Dark";

const Layout = () => (
  <Container>
    <Navbar expand="md" className="border-bottom mb-4">
      <Link to="/" className="navbar-brand">
        Hive Innovation
      </Link>
      <Nav navbar pills>
        <NavItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/products"
          >
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/anagram"
          >
            Anagram
          </NavLink>
        </NavItem>
        <button
          type="button"
          className="text-dark p-1 nav-link text-large ms-2 d-flex justify-content-center align-items-center p-0"
        >
          <Dark />
        </button>
      </Nav>
    </Navbar>
    <Outlet />
  </Container>
);

export default Layout;
