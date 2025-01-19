import React from 'react'
import Paragraph from "../../../../UI/Paragraph";
import Arrow from "../../../../assets/icon/arrowRight.svg";
function CasePlatForm({values, touched, errors, handleChange, handleBlur ,num}) {
  return (
    <>
      <div className=" container py-4  wow animate__animated animate__fadeInLeft animate__delay">
        <div className=" step pt-0">
          <div className="d-flex">
            <Paragraph className="title-white-sm text-capitalize mb-4 ">
              {num}
              <img src={Arrow} alt="#" className="mx-3" />
            </Paragraph>
            <Paragraph className="title-white-sm text-capitalize mb-4">
              Choose Platform :
            </Paragraph>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              //   className="form-check-input custom-checkbox"
              className="form-check-input custom-checkbox"
              type="radio"
              name="long"
              onChange={handleChange}
              key="14"
              id="flexRadioDefault14"
              value="Product Development"
              checked={values.long === "Product Development"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault14"
            >
              Product Development
            </label>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              name="long"
              id="flexRadioDefault15"
              onChange={handleChange}
              key="15"
              value="UX/UI Design"
              checked={values.long === "UX/UI Design"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault15"
            >
              UX/UI Design
            </label>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              name="long"
              onChange={handleChange}
              key="16"
              value="Develop an MVP"
              id="flexRadioDefault16"
              checked={values.long === "Develop an MVP"}
            />
            <label
              class="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault16"
            >
              Develop an MVP
            </label>
          </div>
          <div class="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              name="long"
              onChange={handleChange}
              key="17"
              value="All of the Above"
              id="flexRadioDefault17"
              checked={values.long === "All of the Above"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault17"
            >
              All of the Above
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default CasePlatForm
