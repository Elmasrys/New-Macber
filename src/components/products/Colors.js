import React from "react";
import Paragraph from "../../UI/Paragraph";
const  Colors = (props) => {
  return (
    <>
      <section className=" py-2">
        <div className="container">
          <div className="div_back_ground">
            <div className=" back_ground_hex">
              <div className=" row">
                <div
                  className="col-xl-4 col-md-4 col-sm-12 m-xl-2 mx-1  border_hex bg_blue "
                  style={props.styleBrand}
                >
                  <div className="hex_div">
                    <Paragraph className="hex_title">Secondary </Paragraph>
                    <Paragraph className="hex_color">
                      {props.NumColorBrand}
                    </Paragraph>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-4 col-sm-12 m-xl-2 mx-1 border_hex bg_blue_white"
                  style={props.styleAcc}
                >
                  <div className="hex_div">
                    <Paragraph className="hex_title">Accent</Paragraph>
                    <Paragraph className="hex_color">
                      {props.NumColorAcct}
                    </Paragraph>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-4 col-sm-12 m-xl-2 mx-1 border_hex "
                  style={props.styleNatural}
                >
                  <div className="hex_div">
                    <Paragraph className="hex_title_black bold-700">
                      Neutral
                    </Paragraph>
                    <Paragraph className="hex_color_black">
                      {props.NutralName}
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Colors;
