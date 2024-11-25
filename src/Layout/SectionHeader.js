import { useEffect } from "react";
import classes from "./MainHeaderWrapper.module.css";
import Paragraph from "../UI/Paragraph";
import wow from "wowjs";
import DescriptionList from "../UI/DescriptionList";
import { HashLink } from "react-router-hash-link";

const SectionHeader = (props) => {
  useEffect(() => {
    new wow.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div
        className={`container h-100 d-flex justify-content-start align-items-center`}
      >
        <div
          className={`${props.className}'col-xl-6 col-12 wow animate__animated animate__fadeInLeft'`}
          data-wow-duration="2s"
        >
          <Paragraph className={"mb-xl-4 mb-2  bold-700 font-xl title_ba_blue"}>
            {props.mini}
          </Paragraph>
          <Paragraph
            className={`${
              props.titleName
            } ${"mb-xl-4 mb-2 title_white bold-700 "}`}
          >
            {props.title}
          </Paragraph>
          <Paragraph className={`my-xl-5 my-4 ${classes.p_white}`}>
            {props.desc}
          </Paragraph>
          {props.descList && <DescriptionList descList={props.descList} />}
          <div className="header-btn">
            {props.callToActionOne && (
              <HashLink
                onClick={props.onClickOne}
                id={props.idOne}
                to={props.to}
                className={`${
                  props.classNameOne
                } ${"btn-white me-2 mb-1 btn-scale text-decoration-none btn"}`}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {props.callToActionOne}
              </HashLink>
            )}

            {props.callToActionTwo && (
              <HashLink
                // smooth
                onClick={props.onClickTwo}
                id={props.idTwo}
                className={`${
                  props.classNameTwo
                } ${" btn-white-two ms-xl-3  btn-scale text-decoration-none "}`}
                tagType="link"
                to={props.to2}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {props.callToActionTwo}
              </HashLink>
            )}
            {props.DescService && (
              <Paragraph className="title-white-sm ">
                {props.DescService}
              </Paragraph>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionHeader;
