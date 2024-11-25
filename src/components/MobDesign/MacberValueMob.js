import React from 'react'
import CardValue from '../../UI/CardValue';
import ImgMob from "../../assets/New/CreativeMob.jpg";
import IntegrityMob from "../../assets/New/Value-mob1 (3).jpg";
import GrowthMob from "../../assets/New/Value-mob1 (2).jpg";
import FlexibilityMob from "../../assets/New/Value-mob1.jpg";
import Innovation from "../../assets/New/Innovation.jpg";
import Quality from "../../assets/New/Quality.jpg";
import Experience from "../../assets/New/Experience.jpg";
import Collaboration from "../../assets/New/Collaboration.jpg";
import Slider from "react-slick";
const  MacberValueMob = ()=> {
      const MacberValueSetting = {
        className: "",
        centerPadding: "10px",
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <div className="Value-macber-Mob">
            <Slider {...MacberValueSetting}>
              <div className="">
                <CardValue
                  classNameTitle="Value-mob-title"
                  alt={"macber-Innovation"}
                  HeadOne={`Innovation`}
                  DescOne={`We are dedicated to pushing the boundaries of
                  technology, creating software solutions that are not just
                  functional but truly innovative, unique, and valuable.`}
                  srcOne={Innovation}
                  width="100%"
                  height="380px"
                />
              </div>
              <div className="">
                <CardValue
                  classNameTitle="Value-mob-title"
                  alt={"macber-Quality"}
                  HeadOne={`Quality`}
                  DescOne={`
                  We value delivering software solutions characterized by exceptional quality, reliability, and durability.`}
                  srcOne={Quality}
                  width="100%"
                  height="380px"
                />
              </div>
              <div className="">
                <CardValue
                  classNameTitle="Value-mob-title"
                  alt={"macber-Experience"}
                  HeadOne={`Customer Experience`}
                  DescOne={`
                  We believe that building strong relationships and delivering
                  exceptional value to our clients is essential to remarkable
                  customer experience.`}
                  srcOne={Experience}
                  width="100%"
                  height="380px"
                />
              </div>
              <div className="">
                <CardValue
                  classNameTitle="Value-mob-title"
                  alt={"macber-Collaboration"}
                  HeadOne={`Collaboration`}
                  DescOne={`
                We work intimately with our clients, partners, and stakeholders to
                  develop customized solutions that meet their unique needs.`}
                  srcOne={Collaboration}
                  width="100%"
                  height="380px"
                />
              </div>
              <div className="">
                <CardValue
                  HeadOne={`  Creativity`}
                  DescOne={` We value creativity and encourages our team to think outside the
                    box. We are fueled with imaginative solutions that enhance the
                    human experience.`}
                  // srcOne={Creativity}
                  srcOne={ImgMob}
                  width="100%"
                  height="380px"
                />
              </div>
              <div className="">
                <CardValue
                  classNameTitle={"small-title"}
                  classNameDesc={"small-desc"}
                  alt={"macber-Integrity"}
                  HeadOne={`Integrity`}
                  DescOne={`  We operate with the highest standards of ethics and integrity.
                    We believe in honesty, transparency, and fairness in all their
                    business dealing`}
                  srcOne={IntegrityMob}
                  width="100%"
                  height="380px"
                />
              </div>
              <div className="">
                <CardValue
                  classNameTitle={"small-title"}
                  classNameDesc={"small-desc"}
                  alt={"macber-Growth"}
                  HeadOne={`Growth`}
                  DescOne={`  We invest in the professional development of our teams and
                    continuously evaluate and improve their processes to ensure they
                    are always delivering the best possible value to clients.`}
                  srcOne={GrowthMob}
                  width="100%"
                  height="380px"
                />
              </div>
              <div className="">
                <CardValue
                  alt={"macber-Flexibility"}
                  HeadOne={`Flexibility`}
                  DescOne={`  We are committed to being flexible and adaptable to ensure we
                    can deliver solutions that are tailored to clients' needs.`}
                  srcOne={FlexibilityMob}
                  width="100%"
                  height="380px"
                />
              </div>
            </Slider>
        </div>
    </>
  );
}

export default MacberValueMob;
