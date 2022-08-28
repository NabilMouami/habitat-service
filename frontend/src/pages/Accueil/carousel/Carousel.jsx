import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {

  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const Carousel = () => {
    let data = [
        "/assets/Madrier.png",
        "/assets/depoy.jpg",
        "/assets/Pin.jpg",
        "/assets/Eyong.jpg",
        "/assets/panneau.jpeg",
        "/assets/woodhome.jpg",
    ]

  return (
    <div className="carouse">
      <h1 style={{opacity: "0"}}>Basic carousel</h1>
      <Slider
        autoplay
        autoplaySpeed={2000}
        // dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "100%", height: "100vh" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
