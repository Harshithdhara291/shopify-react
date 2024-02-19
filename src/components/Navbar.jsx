import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { LiaOpencart } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  const jwtToken = localStorage.getItem("jwtToken");
  const tokenPresent = jwtToken !== null;

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary py-3 sticky-top"
      style={{ backgroundColor: "transparent" }}
    >
      <Container fluid>
        <Navbar.Brand>
          <Brand>
            <Linkk to="/">
              Shopify App <LiaOpencart />
            </Linkk>
          </Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Linkk to="/">Home</Linkk>
            </Nav.Link>
            {!tokenPresent && (
              <Nav.Link>
                <Linkk to="/login">Login</Linkk>
              </Nav.Link>
            )}
            <Nav.Link>
              <Linkk to="/products">Products</Linkk>
            </Nav.Link>
            {tokenPresent && (
              <NavDropdown title="more" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Linkk to="/profile" style={{ width: "100%" }}>
                    <CgProfile /> Profile
                  </Linkk>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Linkk to="/cart" style={{ width: "100%" }}>
                    <FaShoppingCart /> My Cart
                  </Linkk>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Linkk to="/orders" style={{ width: "100%" }}>
                    <FaBoxOpen /> Orders
                  </Linkk>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <button
                    onClick={logoutUser}
                    style={{ background: "none", border: "none",width:"100%" }}
                  >
                    Logout <FiLogOut />
                  </button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

const Linkk = styled(Link)`
display: block;
  text-decoration: none;
  color: #5f5f5f;
  /* width: 100%; */
`;

const Brand = styled.h1`
  color: #252525;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
