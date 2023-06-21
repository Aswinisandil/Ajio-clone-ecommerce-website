import React,{ useEffect} from "react";
import { Link } from "react-router-dom";

const SmallCarousel = ({ images }) => {

   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Link to={'/products'} onClick={() => window.scrollTo(0, 0)}>
        <img src={images.img1} alt="" />
        <img src={images.img2} alt="" />
        <img src={images.img3} alt="" />
        <img src={images.img4} alt="" />
      </Link>
    </div>
  );
};

export default SmallCarousel;
