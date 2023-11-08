import React from "react";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const ReduxData = useSelector(
    (state) => state.persistedData.AddAndViewCartData.AddAndViewCartData
  );

  const subtotal = ReduxData.reduce(
    (acc, item) => acc + parseFloat(item.Price) * item.quantity,
    0
  );

  const navigate = useNavigate("");

  const NavigateHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="CartPage">
        {ReduxData?.length > 0 ? (
          ReduxData?.map((item) => {
            return (
              <ProductCard
                Uid={item.uid ? item.uid : ""}
                titleName={item.TitleName ? item.TitleName : ""}
                price={item.Price ? item.Price : ""}
                originalPrice={item.OriginalPrice ? item.OriginalPrice : ""}
                discount={item.Discount ? item.Discount : ""}
                category={item.Category ? item.Category : ""}
                description={item.Description ? item.Description : ""}
                image={item.Image ? item.Image : ""}
                ratingRate={item.RatingRate ? item?.RatingRate : ""}
                ratingCount={item.RatingCount ? item?.RatingCount : ""}
              />
            );
          })
        ) : (
          <div
            style={{
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                color: "white",
              }}
            >
              <h1>There are no product in your cart</h1>
              <h3>Add the products you like to the cart and buy</h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  width: "200px",
                  background: "pink",
                  color: "#f24973",
                }}
                onClick={NavigateHandler}
              >
                Continue Shopping...
              </Button>
            </div>
          </div>
        )}
        {ReduxData?.length > 0 ? (
          <div className="order_Summary">
            <h3>Order Summary</h3>
            <div className="order_Details">
              <p>
                Subtotal<span>${subtotal?.toFixed(2)}</span>
              </p>
              <p>
                Shipping Estimate<span>$5</span>
              </p>
              <p>
                Tax Estimate<span>$5</span>
              </p>
              <hr />
              <p>
                Order Total
                <span>${(subtotal + 10)?.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
