import React, { useEffect, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch } from "react-redux";
import { detailsBois } from "../../../actions/boisaction";
import { NavLink } from "react-router-dom";
import databois from "../../../utils/DataBois";
import { useLocation } from "react-router-dom";
import "./style.css"


function Prod() {
  const location = useLocation();
  const state = location.state || {};

  const [list, setLists] = useState([]);
useEffect(()=>{
  const filterItems = (category) => {
    const newItems = databois.filter((item) => item.data.category === category);
    console.log(newItems)
    setLists(newItems);
  };
 filterItems(state.data);
},[])

  const dispatch = useDispatch();


  return (
    <article className="prod">
      <h2 className="heading-prod" data-aos="zoom-in-down">
        Notre familles de Produits
      </h2>

      <div className="grid-prod">
        {list.map((item) => (
          <NavLink
            to={item.title + "/" + item.id}
            key={item.data.id}
            onClick={() => dispatch(detailsBois(item))}
          >
            <div className="box-pr" key={item.id} data-aos="fade-up">
              <div className="img-pr">
                <img src={item.data.image} alt="" style={{width: '100%',height: '200px'}}/>
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
  )
}

export default Prod