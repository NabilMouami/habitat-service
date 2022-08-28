import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./style.css";
import databois from "../../../utils/DataBois";
import { useDispatch } from "react-redux";
import { detailsBois } from "../../../actions/boisaction";
import { NavLink } from "react-router-dom";

const allCategory = ["all", ...new Set(databois.map((item) => item.data.category))];

const Products = () => {
  const [list, setLists] = useState(databois);
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = databois.filter((item) => item.data.category === category);
    setLists(newItems);
    if (category === "all") {
      setLists(databois);
    }
  };

  const dispatch = useDispatch();
  return (
    <article className="prod">
      <h2 className="heading" data-aos="zoom-in-down">
        Notre familles de Produits
      </h2>
      <div className="catButton">
        {category.map((category) => (
          <button
            className="primaryBtn"
            onClick={() => filterItems(category)}
            data-aos="zoom-out-down"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid-prod">
        {list.map((item) => (
          <div className="box-pr" key={item.id} data-aos="fade-up">
            <div className="img-pr">
              <img src={item.data.image} alt="" style={{width: '100%',height: '200px'}}/>
            </div>
            <div className="overlay">
              <h3>{item.title}</h3>
              <NavLink
                to={"produits/" + item.title + "/" + item.id}
                key={item.data.id}
                onClick={() => dispatch(detailsBois(item))}
              >
                <VisibilityOutlinedIcon />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Products;
