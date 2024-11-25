import React from "react";
import Paragraph from "./Paragraph";
const CardValue = (props) => {
  return (
    <>
      <div className=" value position-relative ">
        <img className="Img-value " alt={props.alt} src={props.srcOne} width={props.width}  height={props.height} style={props.style}/>
        <div className="Overlay-value"></div>
        <div className="Value_div">
            <Paragraph
              className={` bold-700 Title-value-card mb-0 ${
                props.classNameTitle
              }`}
            >
              {props.HeadOne}
            </Paragraph>
            <Paragraph
              className={` w-80 text-center Desc-value-card mb-0 ${
                props.classNameDesc
              }`}
            >
              {props.DescOne}
            </Paragraph>
        </div>
      </div>
    </>
  );
};

export default CardValue;
