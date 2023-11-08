import React, { useEffect, useState } from "react";
import productImage from "../../Assets/Images/product one.png";
import star from "../../Assets/Images/star.png";
import count from "../../Assets/Images/count.png";
import cartIcon from "../../Assets/Images/add to cart.png";
import Trash from "../../Assets/Images/trash.png";
import { useNavigate } from "react-router-dom";
import trash from "../../Assets/Images/trash.png";
import { useDispatch, useSelector } from "react-redux";
import { getViewSingleProductId } from "../../Redux/ReduxDataSlices/ViewSingleProductDataSlice";
import {
  DeleteAddAndViewCartData,
  getAddAndViewCartData,
  reduceItemQuantity,
} from "../../Redux/ReduxDataSlices/AddAndViewCartDataSlice";

const ProductCard = ({
  Uid,
  titleName,
  price,
  originalPrice,
  discount,
  category,
  description,
  image,
  ratingRate,
  ratingCount,
}) => {
  // const [quantity, setQuantity] = useState(0);

  const ReduxData = useSelector(
    (state) => state.persistedData.AddAndViewCartData.AddAndViewCartData
  );

  const isProductInCart = ReduxData.some((product) => product.uid === Uid);

  const cartItems = useSelector(
    (state) => state.persistedData.AddAndViewCartData.AddAndViewCartData
  );

  const cartItem = cartItems.find((item) => item.uid === Uid);
  const quantity = cartItem ? cartItem.quantity : 0;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const NavigateHandler = (Id) => {
    dispatch(getViewSingleProductId(Id));
    navigate("/product-page");
  };
  const windowPath = window.location.href;
  const cart = windowPath.split("/")[3];

  // Quantity change function
  const quantityChange = (action, data) => {
    if (action === "decrease" && quantity > 0) {
      let Uid = data;
      dispatch(reduceItemQuantity(Uid));
    } else if (action === "increase") {
      let val = data;
      dispatch(getAddAndViewCartData(val));
    }
  };

  const AddCartHandler = (data) => {
    let val = data;
    dispatch(getAddAndViewCartData(val));
  };

  const DeleteHandler = (val) => {
    let UID = val;
    dispatch(DeleteAddAndViewCartData(UID));
  };

  if (cart === "cart" || cart === "product-page") {
    return (
      <div className="ProductCard">
        <div className="product_Content">
          {cart === "cart" ? (
            <img
              className="trashIcon"
              alt="Trash Icon"
              src={trash}
              onClick={() => DeleteHandler(Uid)}
            />
          ) : (
            <></>
          )}
          <div className="product_Image">
            <img src={image ? image : productImage} alt="Product Image" />
          </div>
          <div className="product_Details">
            <p className="category_Name">
              {category ? category : "Men's Clothing"}
            </p>
            <h3 className="brand_Name" title="Carbonn Cloth">
              {titleName
                ? titleName
                : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
            </h3>
            <p
              className="product_Desc"
              title="Men Regular Fit Washed Cut Away Collar Casual Shirt"
            >
              {description
                ? description
                : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"}
            </p>
            <div className="amount_Div">
              <p className="current_Price">
                <span>$</span>
                {price ? price : "90"}
              </p>
              <p className="original_Price">
                <span>$</span>
                {originalPrice ? originalPrice : "100"}
              </p>
              <p className="discount_Offer">
                <span>{discount ? discount : "10"}</span>% off
              </p>
            </div>
            <div className="rating_Div">
              <p className="ratingRate">
                {ratingRate ? ratingRate : "3.9"}
                <img src={star} alt="star" className="star_Image" />
              </p>
              <p className="ratingCount">
                {ratingCount ? ratingCount : "10"}
                <img src={count} alt="count" className="count_Image" />
              </p>
            </div>
            {cart === "cart" ? (
              <div className="quantity_Button">
                <button onClick={() => quantityChange("decrease", Uid)}>
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() =>
                    quantityChange("increase", {
                      uid: Uid,
                      TitleName: titleName,
                      Price: price,
                      OriginalPrice: originalPrice,
                      Discount: discount,
                      Category: category,
                      Description: description,
                      Image: image,
                      RatingRate: ratingRate,
                      RatingCount: ratingCount,
                      quantity: 1,
                    })
                  }
                >
                  +
                </button>
              </div>
            ) : (
              <></>
            )}
            <div className="card_Buttons">
              {/* <button>Buy Now</button> */}
              {isProductInCart ? (
                cart === "cart" ? (
                  <></>
                ) : (
                  <button
                    style={{ background: "Red", color: "white" }}
                    onClick={() => DeleteHandler(Uid)}
                  >
                    <img src={Trash} alt={"cart icon"} className="cart_Icon" />
                    {cart === "cart" ? "Delete" : "Remove From Cart"}
                  </button>
                )
              ) : (
                <button
                  onClick={() =>
                    AddCartHandler({
                      uid: Uid,
                      TitleName: titleName,
                      Price: price,
                      OriginalPrice: originalPrice,
                      Discount: discount,
                      Category: category,
                      Description: description,
                      Image: image,
                      RatingRate: ratingRate,
                      RatingCount: ratingCount,
                      quantity: 1,
                    })
                  }
                >
                  <img
                    src={cartIcon}
                    alt={"cart icon"}
                    className="cart_Icon"
                    style={{ color: "#f24973" }}
                  />
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ProductCard">
        <div className="product_Content" onClick={() => NavigateHandler(Uid)}>
          <div className="product_Image">
            <img src={image ? image : productImage} alt="Product Image" />
          </div>
          <div className="product_Details">
            <p className="category_Name">
              {category ? category : "Men's Clothing"}
            </p>
            <h3 className="brand_Name" title="Carbonn Cloth">
              {titleName
                ? titleName
                : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
            </h3>
            <p
              className="product_Desc"
              title="Men Regular Fit Washed Cut Away Collar Casual Shirt"
            >
              {description
                ? description
                : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"}
            </p>
            <div className="amount_Div">
              <p className="current_Price">
                <span>$</span>
                {price ? price : "90"}
              </p>
              <p className="original_Price">
                <span>$</span>
                {originalPrice ? originalPrice : "100"}
              </p>
              <p className="discount_Offer">
                <span>{discount ? discount : "10"}</span>% off
              </p>
            </div>
            <div className="rating_Div">
              <p className="ratingRate">
                {ratingRate ? ratingRate : "3.9"}
                <img src={star} alt="star" className="star_Image" />
              </p>
              <p className="ratingCount">
                {ratingCount ? ratingCount : "10"}
                <img src={count} alt="count" className="count_Image" />
              </p>
            </div>
          </div>
        </div>
        <div className="card_Buttons">
          {isProductInCart ? (
            <button
              style={{ background: "Red", color: "white" }}
              onClick={() => DeleteHandler(Uid)}
            >
              <img src={Trash} alt={"cart icon"} className="cart_Icon" />
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() =>
                AddCartHandler({
                  uid: Uid,
                  TitleName: titleName,
                  Price: price,
                  OriginalPrice: originalPrice,
                  Discount: discount,
                  Category: category,
                  Description: description,
                  Image: image,
                  RatingRate: ratingRate,
                  RatingCount: ratingCount,
                  quantity: 1,
                })
              }
            >
              <img
                src={cartIcon}
                alt={"cart icon"}
                className="cart_Icon"
                style={{ color: "#f24973" }}
              />
              Add to cart
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default ProductCard;
