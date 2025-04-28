import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Navbar/Footer";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinID } = useParams();
  return (
    <>
      <Navbar />
      <p>{coinID}</p>
      <Footer />
    </>
  );
};

export default Coin;
