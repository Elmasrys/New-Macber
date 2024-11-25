import React from 'react'
import Paragraph from "./Paragraph";

const CardValueMob = (props)=> {
  return (
    <>
      <div className=" value position-relative ">
        <img className="Img-value " alt={props.alt} src={props.srcOne} />
        <div className="Overlay-value"></div>
        <div className="Value_div">
          <div className="center-value">
            <span
              className={`${"text-center  Title-value-card-mob "}${
                props.classNameTitle
              }`}
            >
              {props.HeadOne}
            </span>
            <Paragraph
              className={`${"text-black-light pb-2 line-h-0 w-80 text-center m-auto Desc-value-card-mob"} ${
                props.classNameDesc
              }`}
            >
              {props.DescOne}
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardValueMob
