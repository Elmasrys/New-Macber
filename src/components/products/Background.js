import React from "react";
import Paragraph from "../../UI/Paragraph";
const Background = (props) => {
  return (
    <>
      <div className="container">
        <div className="div_back_ground">
          <div className="back_ground div_back_ground">
            <div className="Natural" style={props.styleNatural}></div>
            <div
              className="div_back_ground_black "
              style={props.stylePrim}
            ></div>
            <div
              className="div_back_ground_blue "
              style={props.styleBrand}
            ></div>
          </div>
        </div>
        <div className="parent py-xl-5 py-2">
          <div className="child">
            <Paragraph>Background 60%</Paragraph>
            <div className="child">
              <Paragraph className="px-xl-5 px-2">Typography 30%</Paragraph>
              <Paragraph className="">Brand color 10%</Paragraph>
            </div>
          </div>
        </div>
        <div className="">
          <div className="div_back_ground">
            <div className="back_ground black_parent" style={props.stylePrim2}>
              <div className="Hex">
                <Paragraph className="hex_title">Primary Color</Paragraph>
                <Paragraph className="hex_color">{props.NamePrim}</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
