import React,{useEffect} from "react";
import services from "./SerData";
import "./style.css";
const Services = () => {
  useEffect(() => {
    window.scroll(0,0)
 },[])


  return (
    <>
      <section className="services">
        <div className="contain">
          <h2 className="heading" data-aos="zoom-in-down">
              Services
          </h2>

          <div className="content-sr grid5" >
            {services.map((item) => (
              <div key={item.id} className="box-service" data-aos="zoom-in-up">
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <span className="paragra">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
