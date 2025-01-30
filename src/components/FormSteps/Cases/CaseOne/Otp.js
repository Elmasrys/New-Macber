import Paragraph from "../../../../UI/Paragraph";
import Arrow from "../../../../assets/icon/arrowRight.svg";

const Otp = ({values, touched, errors, handleChange, handleBlur ,num }) => {
    return (
      <>
        <div className="container py-4 pt-95  wow animate__animated animate__fadeInLeft animate__delay">
          <div className=" step ">
            <div className="d-flex">
             

              <Paragraph className="title-white-sm mb-4 d-flex ">
              Otp
              </Paragraph>
            </div>
            <label htmlFor="Otp" className="form-label">
              <input
                autocomplete="off"
                id="Otp"
                className="input-step my-5"
                type="text"
                placeholder="Type your Otp"
                name="Otp"
                onChange={handleChange}
                value={values.Otp}
              />
            </label>
            {errors.Otp && touched.Otp && (
              <p className="text-danger mb-0">{errors.Otp}</p>
            )}
          </div>
        </div>
      </>
    );
};
export default Otp;