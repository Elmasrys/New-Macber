import React from "react";
import Paragraph from "../../UI/Paragraph";
import { Pa } from "react-flags-select";

const OurWorkAbot = ({ linksItems }) => {
  return (
    <>
      
      <div className="container  py-5">
        <div className="row ">
          {linksItems.map((item, index) => {
            return (
              <>
          {item.live ? <div className="col-xl-3 col-sm-12   ">
            <Paragraph className="desc-blue-sm text-capitalize mb-0 text-xl-start text-center">
             {item.live}
            </Paragraph>
          </div> :''}
                <div
                  key={index}
                  className="col-6 col-xl-3  d-lg-flex   align-items-center py-xl-0 py-3"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    className="desc-black lightGrey5  d-flex justify-content-center"
                  >
                    {item.logo}
                    <Paragraph className="links m-0">{item.text}</Paragraph>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurWorkAbot;
