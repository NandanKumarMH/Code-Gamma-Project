import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="LoadingPage">
      Loading...
      <RotatingLines strokeColor="white" width={20} visible={true} />
    </div>
  );
};

export default LoadingPage;
