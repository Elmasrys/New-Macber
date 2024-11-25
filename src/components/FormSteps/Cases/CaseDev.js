import Paragraph from "../../../UI/Paragraph";
import Arrow from "../../../assets/icon/arrowRight.svg";

const CaseDev = ({ values, touched, errors, handleChange, handleBlur }) => {
  return (
    <>
      <div className="container py-4  wow animate__animated animate__fadeInLeft animate__delay">
        <div className=" step pt-0">
          <div className="d-flex">
            <Paragraph className="title-white-sm text-capitalize mb-4  d-flex text-center">
              1
              <img src={Arrow} alt="#" className="mx-3" />
            </Paragraph>
            <Paragraph className="title-white-sm text-capitalize mb-4">
              How many developers do you need?
            </Paragraph>
          </div>

          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              id="flexRadioDefault1"
              name="developer"
              onChange={handleChange}
              value="1-3"
              key="1"
              checked={values.developer === "1-3"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault1"
            >
              1-3
            </label>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              id="flexRadioDefault2"
              name="developer"
              onChange={handleChange}
              value="3-5"
              key="2"
              checked={values.developer === "3-5"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault2"
            >
              3-5
            </label>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              id="flexRadioDefault3"
              name="developer"
              onChange={handleChange}
              value="5-10"
              key="3"
              checked={values.developer === "5-10"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault3"
            >
              5-10
            </label>
          </div>
          <div className="form-check d-flex check_border mb-3">
            <input
              className="form-check-input custom-checkbox"
              type="radio"
              id="flexRadioDefault4"
              name="developer"
              onChange={handleChange}
              value="+ 10"
              key="4"
              checked={values.developer === "+ 10"}
            />
            <label
              className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
              htmlFor="flexRadioDefault4"
            >
              + 10
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDev;
