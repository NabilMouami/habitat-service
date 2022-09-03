
import SidebarItem from "./SidebarItem"
import items from "./data"
import "./style.css"
import React from "react"

export default function Sidebar(){
    return (
        <div className="sidebar">
          {items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}