import { useState } from "react";
// import CardManger from '../../UI/CardManger';
import Button from "../../UI/Button";
import teams from "../../data/TeamData";
import CardTeam from "../../UI/CardTeam";
import Slider from "react-slick";
import Media from "../../UI/Media";
import Right from "../../assets/icons/arrow_right.svg";
import left from "../../assets/icons/arrow_left.svg";
import CardManger from "../../UI/CardManger";
import ceo from "../../assets/New/Medhat.jpg";
import cco from "../../assets/New/Sherif.jpg";


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className=" btn_next-mob" onClick={onClick}>
      <Media type="img" className=" " src={Right} />
    </div>
  );
};

const PrevArorow = (props) => {
  const { onClick } = props;
  return (
    <div className=" btn_back-mob" onClick={onClick}>
      <Media type="img" className=" " src={left} />
    </div>
  );
};
const ScrollTeam = (props) => {
   const settings = {
     className: "center",
     centerMode: true,
     dots: false,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,
     initialSlide: 0,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArorow />,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: false,
         },
       },
       {
         breakpoint: 767,
         settings: {
           centerPadding: "10px",
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           centerPadding: "10px",

           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };

  return (
    <>
      {/* <div className="row row-cols-2 row-cols-md-3  row-cols-lg-5 g-2 g-lg-3  py-5"> */}
      <div className="container-fluid mobile-scroll">
        <Slider {...settings} className="">
          <CardManger
            src={ceo}
            className={"team-member rounded-0"}
            overlay={"team-member-info"}
            lead={false}
            person={{
              name: "Ahmed Medhat",
              position: "Chairman & CEO",
              socialLinks: {
                linkedin: "https://www.linkedin.com/",
                behance: "",
                githup: "",
              },
            }}
          />
          <CardManger
            src={cco}
            className={"team-member rounded-0"}
            overlay={"team-member-info"}
            lead={false}
            person={{
              name: "Sherif K. Elmasry",
              position: "Vice Chairman & CCO",
              socialLinks: {
                linkedin: "https://www.linkedin.com/",
              },
            }}
          />
          {teams.map((team) => {
            return (
              <div className="" key={team.id}>
                <CardTeam
                  src={team.src}
                  className={"team-member width-fit-content mx-auto rounded-0"}
                  overlay={"team-member-info"}
                  // width="100%"
                  // height="240px"
                  lead={false}
                  person={{
                    name: team.person.name,
                    position: team.person.position,
                    info: team.person.info,
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* </div> */}
    </>
  );
};
export default ScrollTeam;
