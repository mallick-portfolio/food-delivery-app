import React from "react";
import loader from "../../assets/images/loader.gif";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 bg-white right-0 bottom-0 w-full z-50 overflow-hidden">
      <img src={loader} alt="" />
      <p>loading...</p>
    </div>
  );
};

export default Loading;
