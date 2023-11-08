import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { CategoryTabs } from "../../Components/CategoryTabs/CategoryTabs";
import Footer from "../../Components/Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading === true ? <LoadingPage /> : <></>}
      <Header />
      <div className="home_Page_Components">
        <CategoryTabs SetLoading={setLoading} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
