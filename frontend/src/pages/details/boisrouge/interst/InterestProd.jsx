import React from "react";
import "./style.css";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { detailsBois } from "../../../../actions/boisaction";
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );
};

export const InterestProd = () => {
  return (
    <div
      className="BootstrapMulti"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "80%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
          slidesToScroll={3}
          dots
        >
          {data.map((item) => (
            <Card item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-interested">
      <img
        className="multi__image"
        src={item.data.image}
        width="90%"
        height="120px"
      />
      <span>{item.title}</span>
      <p>{item.data.category}</p>
      <Link
        to={"produits/" + item.title + "/" + item.id}
        key={item.data.id}
        onClick={() => dispatch(detailsBois(item))}
      >
        <button>Details</button>
      </Link>
    </div>
  );
};
export default InterestProd;
