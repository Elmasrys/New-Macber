import Paragraph from "../../../UI/Paragraph";
import Arrow from "../../../assets/icon/arrowRight.svg";

const CaseLong = ({values, touched, errors, handleChange, handleBlur}) => {
    return (
      <>
        <div className=" container py-4  wow animate__animated animate__fadeInLeft animate__delay">
          <div className=" step pt-0">
            <div className="d-flex">
              <Paragraph className="title-white-sm text-capitalize mb-4 ">
                2
                <img src={Arrow} alt="#" className="mx-3" />
              </Paragraph>
              <Paragraph className="title-white-sm text-capitalize mb-4">
                How long for?
              </Paragraph>
            </div>
            <div className="form-check d-flex check_border mb-3">
              <input
                className="form-check-input custom-checkbox"
                type="radio"
                id="flexRadioDefault5"
                name="long"
                onChange={handleChange}
                value="1-3"
                key="5"
                checked={values.long === "1-3"}
              />
              <label
                className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                htmlFor="flexRadioDefault5"
              >
                1-3 Months
              </label>
            </div>
            <div className="form-check d-flex check_border mb-3">
              <input
                className="form-check-input custom-checkbox"
                type="radio"
                id="flexRadioDefault6"
                name="long"
                onChange={handleChange}
                value="3-6"
                key="6"
                checked={values.long === "3-6"}
              />
              <label
                className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                htmlFor="flexRadioDefault6"
              >
                3-6 Months
              </label>
            </div>
            <div className="form-check d-flex check_border mb-3">
              <input
                className="form-check-input custom-checkbox"
                type="radio"
                id="flexRadioDefault7"
                name="long"
                onChange={handleChange}
                value="6-12"
                key="7"
                checked={values.long === "6-12"}
              />
              <label
                className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                htmlFor="flexRadioDefault7"
              >
                6-12 Months
              </label>
            </div>
            <div className="form-check d-flex check_border mb-3">
              <input
                className="form-check-input custom-checkbox"
                type="radio"
                id="flexRadioDefault8"
                name="long"
                onChange={handleChange}
                value="I'm not sure"
                key="8"
                checked={values.long === "I'm not sure"}
              />
              <label
                className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                htmlFor="flexRadioDefault8"
              >
                I'm not sure
              </label>
            </div>
          </div>
        </div>
      </>
    );
};
export default CaseLong;