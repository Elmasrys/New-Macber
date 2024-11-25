import Paragraph from "../../UI/Paragraph";
import SectionTitle from "../../Layout/SectionTitle";
import classes from "./WhatWeDo.module.css";
import Button from "../../UI/Button";
import Media from "../../UI/Media";
import MediaSrc from "../../assets/Bg_img.svg";
import uiuxLogo from "../../assets/icon/Ux.svg";
import mobileDevIcon from "../../assets/icon/Product.svg";
import dedicatedDevIcon from "../../assets/icon/Dedicated.svg";
import sassDev from "../../assets/icon/Saas.svg";
import BackGroundLight from "../../Layout/BackGroundLight";
const WhatWeDo = () => {
  return (
    <>
      <section className="py-5">
        <BackGroundLight className="backGround_light">
          <div className="container py_5">
            <div className="row align-items-center flex-lg-row flex-column-reverse">
              <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                <SectionTitle sectTilte={"What we do"} />
                <div className="">
                  <div className=" mt-xl-5 mt-3">
                    <div className="d-flex justify-content-start align-items-start">
                      <Media
                        type="img"
                        src={mobileDevIcon}
                        alt="mobileDevIcon"
                      />
                      <div>
                        <Paragraph className="title-dark ms-4 ">
                          Product Development
                        </Paragraph>
                        <Paragraph className="desc-black w-85 t_just  ms-4">
                          Full-cycle software product development services from
                          market research and business analysis to design,
                          development, and launch.
                        </Paragraph>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start">
                      <Media type="img" src={uiuxLogo} alt="uiuxLogo" />
                      <div>
                        <Paragraph className="title-dark ms-4">
                          UX/UI Design
                        </Paragraph>
                        <Paragraph className="desc-black w-85 t_just ms-4">
                          Elevate user experiences and captivate audiences with
                          our bespoke UX/UI services, where seamless design
                          meets intuitive functionality.
                        </Paragraph>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start">
                      <Media
                        type="img"
                        src={dedicatedDevIcon}
                        alt="dedicatedDevIcon"
                      />
                      <div>
                        <Paragraph className="title-dark ms-4">
                          Dedicated Development Team
                        </Paragraph>
                        <Paragraph className="desc-black  w-85 t_just ms-4">
                          Empower your projects with a dedicated development
                          team, committed to turning your visions into reality
                          through expertise, collaboration, and unwavering
                          focus.
                        </Paragraph>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start">
                      <Media type="img" src={sassDev} alt="sassDev" />
                      <div>
                        <Paragraph className="title-dark ms-4 ">
                          SaaS Development
                        </Paragraph>
                        <Paragraph className="desc-black w-85 t_just ms-4">
                          Unleash the power of cloud-based possibilities with
                          our SaaS development, crafting solutions that
                          seamlessly integrate innovation and practicality for
                          your business success.
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className={classes.control}>
                  <Media
                    type="img"
                    src={MediaSrc}
                    alt="media name"
                    className="pic_fit_home border-radus-32"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Button className="btn-blue" tagType="link" to="/services">
                Learn more
              </Button>
            </div>
          </div>
        </BackGroundLight>
      </section>
    </>
  );
};
export default WhatWeDo;
