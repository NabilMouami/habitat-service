import React from "react";
import data from "./data";
import "./Navbar.css";
const Navbartest = () => {
  return (
    <nav className="header">
      <label className="logo">Habitat&Service</label>
      {data.map((item) => {
        return (
          <ul>
            {item.childrens ? (
              <li>
                <a href={item.path}>
                  {item.title} {/*Nos-Produits*/}
                  <i className={item.icon}></i>
                </a>
                <ul>
                  {item.childrens.map((child) => {
                    return (
                     <li>
                       <a href={child.path}>{child.title}
                         <i className="fas fa-caret-right"></i>
                        </a>
                        <ul>
                        {child.childrens ? (
                      
                      child.childrens.map((ch)=> {
                        {console.log(ch.title)} 
                           return(
                            <li><a href={ch.path}>{ch.title}</a></li>

                           )
                           
                      })
                  ) 
                  
                   : <></>}
                  

                        </ul>
                     </li>
                    )
                    
                  })}
                </ul>
                </li>

            ) : (
              <li>
                <a href="/">{item.title}</a>
              </li>
            )}
          </ul>
        );
      })}
    </nav>
  );
};

export default Navbartest;
