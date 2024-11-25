import Slider from "react-slick";
// import "./Supporters.css";
import suporter_1 from "../assets/icon/Supprt(1).svg";
import suporter_2 from "../assets/icon/Supprt(2).svg";
import suporter_3 from "../assets/icon/Supprt(3).svg";
import suporter_4 from "../assets/icon/Supprt(4).svg";
import suporter_5 from "../assets/icon/Supprt(5).svg";
import suporter_6 from "../assets/icon/Supprt(6).svg";
import suporter_7 from "../assets/icon/Supprt(7).svg";
import suporter_8 from "../assets/icon/Supprt(8).svg";
import suporter_9 from "../assets/icon/Supprt(9).svg";
import suporter_10 from "../assets/icon/Supprt(10).svg";
import SectionTitle from "../Layout/SectionTitle";
import Media from "../UI/Media";

const SupportMob = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`container position-relative  our_supporters mob-support`}
      >
        <SectionTitle sectTilte={"Our Partners"} />
        {/* <span className="line "></span> */}
        <Slider
          {...settings}
          className={` d-flex `}
        >
          <div className="">
            <Media
              type="img"
              src={suporter_1}
              alt="suporter_1"
              width="100px"
              height="40px"
            />
          </div>

          <div className=" ">
            <Media
              type="img"
              src={suporter_2}
              alt="suporter_2"
              width="150px"
              height="40px"
            />
          </div>
          <div className="">
            <Media
              type="img"
              src={suporter_4}
              alt="suporter_4"
              width="150px"
              height="40px"
            />
          </div>
          <div className=" ">
            <Media
              type="img"
              src={suporter_5}
              alt="suporter_5"
              width="150px"
              height="40px"
            />
          </div>
          <div className=" ">
            <Media
              type="img"
              src={suporter_6}
              alt="suporter_1"
              width="150px"
              height="40px"
            />
          </div>
          <div className=" ">
            <Media
              type="img"
              src={suporter_7}
              alt="suporter_2"
              width="150px"
              height="40px"
            />
          </div>
          <div className=" ">
            <Media
              type="img"
              src={suporter_8}
              alt="suporter_3"
              width="150px"
              height="40px"
            />
          </div>
          <div className="">
            <Media
              type="img"
              src={suporter_9}
              alt="suporter_4"
              width="150px"
              height="40px"
            />
          </div>
          <div className="">
            <Media
              type="img"
              src={suporter_10}
              alt="suporter_5"
              width="150px"
              height="40px"
            />
          </div>
          <div className=" ">
            <Media
              type="img"
              src={suporter_3}
              alt="suporter_3"
              width="150px"
              height="40px"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
export default SupportMob;
