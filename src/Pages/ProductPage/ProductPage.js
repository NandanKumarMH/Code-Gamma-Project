import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import LoadingPage from "../LoadingPage/LoadingPage";

const ProductPage = () => {
  const [viewSingleProduct, setViewSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const ReduxData = useSelector((state) => state);
  const Uid = ReduxData.persistedData.ViewSingleProductId.ViewSingleProductId;

  const ViewSingleProductAPI = async () => {
    setLoading(true);
    const Res = await fetch(`https://fakestoreapi.com/products/${Uid}`)
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => {
        if (err) {
          return false;
        }
      });

    if (Object.keys(Res)?.length > 0) {
      setViewSingleProduct(Res);
      setLoading(false);
    } else if (Res === false) {
      setViewSingleProduct({});
      setLoading(false);
    } else {
      setViewSingleProduct({});
      setLoading(false);
    }
  };

  useEffect(() => {
    ViewSingleProductAPI();
  }, [Uid]);

  console.log(viewSingleProduct);

  return (
    <>
      {loading === true ? <LoadingPage /> : <></>}
      <div>
        <Header />
        <div className="product_Page_Components">
          <ProductCard
            Uid={viewSingleProduct.id ? viewSingleProduct.id : ""}
            titleName={viewSingleProduct.title ? viewSingleProduct.title : ""}
            price={viewSingleProduct.price ? viewSingleProduct.price : ""}
            originalPrice={
              viewSingleProduct.originalPrice
                ? viewSingleProduct.originalPrice
                : ""
            }
            discount={
              viewSingleProduct.discount ? viewSingleProduct.discount : ""
            }
            category={
              viewSingleProduct.category ? viewSingleProduct.category : ""
            }
            description={
              viewSingleProduct.description ? viewSingleProduct.description : ""
            }
            image={viewSingleProduct.image ? viewSingleProduct.image : ""}
            ratingRate={
              viewSingleProduct?.rating?.rate
                ? viewSingleProduct?.rating?.rate
                : ""
            }
            ratingCount={
              viewSingleProduct?.rating?.count
                ? viewSingleProduct?.rating?.count
                : ""
            }
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
