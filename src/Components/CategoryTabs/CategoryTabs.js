import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { ListAllProductsApi } from "../../Utils/Api/ListAllProductsApi";
import { ListAllCategoriesApi } from "../../Utils/Api/ListAllCategoriesApi";
import { FilterCategoryApi } from "../../Utils/Api/FilterCategoryApi";

export const CategoryTabs = ({ SetLoading }) => {
  const [flag, setFlag] = useState(false);
  const [productList, setProductList] = useState([]);
  const [catList, setCatList] = useState([]);
  const [viewAllFlag, setVeiwAllFlag] = useState(false);
  const [catVal, setCatVal] = useState("");

  // const dummyData = [
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 90,
  //     originalPrice: 100,
  //     discount: 10,
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: { rate: 3.9, count: 120 },
  //   },
  //   {
  //     id: 1,
  //     title: "...",
  //     price: "",
  //     originalPrice: "",
  //     discount: "",
  //     category: "...",
  //     description: "...",
  //     image: "...",
  //     rating: { rate: 3.9, count: 120 },
  //   },
  //   {
  //     id: 30,
  //     title: "...",
  //     price: "",
  //     originalPrice: "",
  //     discount: "",
  //     category: "...",
  //     description: "...",
  //     image: "...",
  //     rating: { rate: 3.9, count: 120 },
  //   },
  // ];

  const ViewAllHandler = () => {
    setVeiwAllFlag(true);
  };

  const ViewLessHandler = () => {
    setVeiwAllFlag(false);
  };

  const AddCatFilter = (val) => {
    setCatVal(val);
  };

  const ClearFilter = () => {
    setCatVal("");
  };

  const ListAllProductsAPI = async () => {
    SetLoading(true);
    const Res =
      catVal === ""
        ? await ListAllProductsApi()
        : await fetch(`https://fakestoreapi.com/products/category/${catVal}`)
            .then((res) => res.json())
            .then((json) => json)
            .catch((err) => {
              if (err) {
                return false;
              }
            });
    if (Res?.length > 0) {
      setProductList(Res);
      SetLoading(false);
    } else if (Res === false) {
      setProductList([]);
      SetLoading(false);
    } else {
      setProductList([]);
      SetLoading(false);
    }
  };

  const ListAllCategoriesAPI = async () => {
    const Res = await ListAllCategoriesApi();
    if (Res?.length > 0) {
      setCatList(Res);
    } else if (Res === false) {
      setCatList([]);
    } else {
      setCatList([]);
    }
  };

  useEffect(() => {
    const Win = window.location.href;
    const SplitWin = Win.split("/");
    if (!SplitWin[3]) {
      setFlag(true);
    }
    ListAllProductsAPI();
    ListAllCategoriesAPI();
  }, [viewAllFlag, catVal]);

  return (
    <>
      <div className="category_Tabs">
        <ul className="mb-3 nav nav-tabs">
          {catList?.length > 0 ? (
            catList?.map((item, i) => {
              return (
                <li className="nav-item" key={i}>
                  <button
                    className={item === catVal ? "nav-link active" : "nav-link"}
                    onClick={() => AddCatFilter(item)}
                  >
                    {item}
                  </button>
                </li>
              );
            })
          ) : (
            <></>
          )}
          <li className="nav-item clear_Filter">
            <button className="nav-link" onClick={ClearFilter}>
              Clear filter
            </button>
          </li>
        </ul>
        <div className="product_Card_Container">
          {productList?.length > 0 ? (
            productList?.map((item, i) => {
              if (i < 4 && viewAllFlag === false) {
                return (
                  <ProductCard
                    Uid={item.id}
                    titleName={item.title}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    discount={item.discount}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                    ratingRate={item.rating.rate}
                    ratingCount={item.rating.count}
                  />
                );
              } else if (viewAllFlag === true) {
                return (
                  <ProductCard
                    Uid={item.id}
                    titleName={item.title}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    discount={item.discount}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                    ratingRate={item.rating.rate}
                    ratingCount={item.rating.count}
                  />
                );
              }
            })
          ) : (
            <h4 className="no_Data_Available">No data available!</h4>
          )}
        </div>
        <div className="view_All_Btn">
          {viewAllFlag === true ? (
            <button onClick={ViewLessHandler}>View Less</button>
          ) : productList?.length > 4 ? (
            <button onClick={ViewAllHandler}>View All</button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
