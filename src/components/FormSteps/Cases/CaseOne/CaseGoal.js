import Paragraph from "../../../../UI/Paragraph";
import Arrow from "../../../../assets/icon/arrowRight.svg";
import React from 'react'

const CaseGoal = ({values, touched, errors, handleChange, handleBlur , num}) => {
  return (
    <>
      <div className="container py-4  wow animate__animated animate__fadeInLeft animate__delay">
        <div className=" step pt-65 ">
          <div className="d-flex">
            <Paragraph className="title-white-sm text-capitalize mb-4 ">
              {num}
              <img src={Arrow} alt="#" className="mx-3" />
            </Paragraph>
            <Paragraph className="title-white-sm text-capitalize mb-4">
              What is Your Goal?
            </Paragraph>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              name="developer"
              onChange={handleChange}
              key="11"
              id="flexRadioDefault11"
              value="Mobile"
              checked={values.developer === "Mobile"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault11"
            >
              Mobile
            </label>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              name="developer"
              onChange={handleChange}
              key="12"
              id="flexRadioDefault12"
              value="web"
              checked={values.developer === "web"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault12"
            >
              Web
            </label>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              id="flexRadioDefault13"
              value="Both"
              className="form-check-input custom-checkbox"
              type="radio"
              name="developer"
              onChange={handleChange}
              key="13"
              checked={values.developer === "Both"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault13"
            >
              Both
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseGoal
