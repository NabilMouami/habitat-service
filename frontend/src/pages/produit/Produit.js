import React, { useState,useEffect } from "react";
import Sidebar from "../details/sidebar/Sidebar";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch } from "react-redux";
import { detailsBois } from "../../actions/boisaction";
import { NavLink } from "react-router-dom";
import databois from "../../utils/DataBois";
import { useLocation } from "react-router-dom";
const allCategory = [
  "all",
  ...new Set(databois.map((item) => item.data.category)),
];

const Produit = () => {
  const location = useLocation();
  const state = location.state || {};

  const [list, setLists] = useState(databois);
  console.log(list)
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = databois.filter((item) => item.data.category === category);
    console.log(newItems)
    setLists(newItems);
    if (category === "all") {
      setLists(databois);
      return;
    }
  };

  const dispatch = useDispatch();


  useEffect(() => {
    window.scroll(0,0)
 },[])

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
          <NavLink
            to={item.title + "/" + item.id}
            onClick={() => dispatch(detailsBois(item))}
          >
            <div className="box-pr" key={item.id} data-aos="fade-up">
              <div className="img-pr">
                <img src={item.data.image} alt="" style={{width: '100%',height: '140px'}}/>
              </div>
              <div className="overlay">
                <h3>{item.title}</h3>
                <VisibilityOutlinedIcon />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </article>
  );
};

export default Produit;
