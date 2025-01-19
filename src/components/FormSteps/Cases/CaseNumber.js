import Paragraph from "../../../UI/Paragraph";
import Arrow from "../../../assets/icon/arrowRight.svg";
// import PhoneInput from "react-phone-number-input";
import { FormContext } from "../../../context/ContextForm";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useState, useContext } from "react";
const CaseNumber = ({values, touched, errors, handleChange, handleBlur , country , num}) => {
   const { getValue } = useContext(FormContext);
    const [selected, setSelected] = useState();
    const [phone, setPhone] = useState();
    function Hand(code) {
      setPhone(code);
      values.phone = code;
      // console.log(values.phone);
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
                What's Your Number?
              </Paragraph>
            </div>
            <div className="position-relative">
              <label
                htmlFor="country"
                className="form-label d-flex align-items-center select-down-num"
              >
                <PhoneInput
                  defaultCountry="ua"
                  value={phone}
                  // type='number'
                  onChange={Hand}
                  className="Select mx-2 mb-0 py-5"
                />
                <input
                  autoComplete="off"
                  className="input-keys"
                  type="text"
                  placeholder="Type your answer here"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                />
              </label>
              <span className="line-mail"></span>
            </div>

            {errors.phone && touched.phone && (
              <p className="text-danger mb-0">{errors.phone}</p>
            )}
          </div>
        </div>
      </>
    );
};
export default CaseNumber;