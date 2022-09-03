import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { detailsBois } from "../../../actions/boisaction";
import { Link, NavLink } from "react-router-dom";

export default function SidebarItem({ item }) {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>{item.title}</span>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to={item.path || "#"}
        className="sidebar-item plain"
        onClick={() => dispatch(detailsBois(item))}
      >
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </Link>
    );
  }
}
