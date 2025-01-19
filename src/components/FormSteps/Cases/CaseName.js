import Paragraph from "../../../UI/Paragraph";
import Arrow from "../../../assets/icon/arrowRight.svg";
import { useContext } from "react";
import {FormContext} from "../../../context/ContextForm";


const CaseName = ({values, touched, errors, handleChange, handleBlur,num}) => {
  const { setName } = useContext(FormContext);
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
                What's your Name ?
              </Paragraph>
            </div>
            
            <label htmlFor="answer" className="form-label">
              <input
                autocomplete="off"
                className="input-step  my-5"
                type="text"
                placeholder="Type your name"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
            </label>
            {errors.name && touched.name && (
              <p className="text-danger mb-0">{errors.name}</p>
            )}
          </div>
        </div>
      </>
    );
};
export default CaseName;