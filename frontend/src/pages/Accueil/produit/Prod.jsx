import React, { useEffect, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch } from "react-redux";
import { detailsBois } from "../../../actions/boisaction";
import Footer from "../../../componenets/Footer";
import { NavLink } from "react-router-dom";
import databois from "../../../utils/DataBois";
import { useLocation } from "react-router-dom";
import "./style.css";

function Prod() {
  const location = useLocation();
  const state = location.state || {};
  console.log(state);

  const [list, setLists] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const filterItems = (category) => {
      const newItems = databois.filter(
        (item) => item.data.category === category
      );
      console.log(newItems);
      setLists(newItems);
    };
    filterItems(state.data);
  }, [state]);

  const dispatch = useDispatch();

  return (
    <div>
      <article className="prod">
        <h2 className="heading-prod" data-aos="zoom-in-down">
          Notre famille de Produits
        </h2>

        <div className="grid-prod">
          {list.map((item) => (
            <NavLink
              to={item.title + "/" + item.id}
              onClick={() => dispatch(detailsBois(item))}
            >
              <div className="box-pr" key={item.name} data-aos="fade-up">
                <div className="img-pr">
                  <img
                    src={item.data.image}
                    alt=""
                    style={{ width: "100%", height: "200px" }}
                  />
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
      <Footer />
    </div>
  );
}

export default Prod;
