import Paragraph from "../../../UI/Paragraph";
import Arrow from "../../../assets/icon/arrowRight.svg";
import React, { useState , useContext } from "react";
import ReactFlagsSelect from "react-flags-select";
import {FormContext} from "../../../context/ContextForm";
const CaseCountry = ({values, touched, errors, handleChange, handleBlur , valueCountry , num}) => {
  // const { setGetValue } = useContext(FormContext);
  const [selected, setSelected] = useState("Egypt");
  function Hand(code) {
    setSelected(code);
    values.country = code;
    // console.log(values.country);
    // setGetValue(values.country);

  }
 
  
    return (
      <>
        <div className="container py-4 pt-95  wow animate__animated animate__fadeInLeft animate__delay">
          <div className=" step ">
            <div className="d-flex">
              <Paragraph className="title-white-sm mb-4 d-flex  ">
                {num}
                <img src={Arrow} alt="#" className="mx-3" />
              </Paragraph>

              <Paragraph className="title-white-sm mb-4 d-flex ">
                What's Your Country?
              </Paragraph>
            </div>
            <div className="position-relative">
              <label
                htmlFor="country"
                className="form-label d-flex align-items-center select-down"
              >
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={Hand}
                  className="Select mx-2 mb-0 py-5"
                  name="country"
                  onChange={valueCountry}
                  value={values.country}
                />
              
              </label>
              <span className="line-mail"></span>
            </div>
            {errors.country && touched.country && (
              <p className="text-danger mb-0">{errors.country}</p>
            )}
          </div>
        </div>
      </>
    );
};
export default CaseCountry;