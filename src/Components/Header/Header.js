import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import companyLogo from "../../Assets/Images/company logo.jpg";
import shoppingCart from "../../Assets/Images/cart.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const ReduxData = useSelector(
    (state) => state.persistedData.AddAndViewCartData.AddAndViewCartData
  );
  const navigate = useNavigate();
  const HomeNavHandler = () => {
    navigate("/");
  };
  const navigateFun = () => {
    navigate("/cart");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={HomeNavHandler} style={{ cursor: "pointer" }}>
          <img class="company_Logo" src={companyLogo} alt="Company Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="cart_Notification">
            <img
              class="shopping_Cart"
              src={shoppingCart}
              alt="Shopping Cart"
              onClick={navigateFun}
            />
            {ReduxData?.length === 0 ? (
              <></>
            ) : (
              <div className="bubble_Notification">
                <p>{ReduxData?.length}</p>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
