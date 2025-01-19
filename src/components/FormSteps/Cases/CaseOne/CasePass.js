import Paragraph from "../../../../UI/Paragraph";
import Arrow from "../../../../assets/icon/arrowRight.svg";

const CasePass = ({values, touched, errors, handleChange, handleBlur , num}) => {
    return (
      <>
        <div className="container py-4 pt-95  wow animate__animated animate__fadeInLeft animate__delay">
        <div className=" step p-0">
            <div className="d-flex">
            

              <Paragraph className="title-white-sm  d-flex ">
                What's Your name?
              </Paragraph>
            </div>
            <label htmlFor="email" className="form-label">
              <input
                autocomplete="off"
                id="email"
                className="input-step p-3  my-4"
                type="text"
                placeholder="Type your name"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </label>
            {errors.email && touched.email && (
              <p className="text-danger mb-0">{errors.email}</p>
            )}
          </div>
        <div className=" step p-0">
            <div className="d-flex">
            

              <Paragraph className="title-white-sm  d-flex ">
                What's Your Phone?
              </Paragraph>
            </div>
            <label htmlFor="email" className="form-label">
              <input
                autocomplete="off"
                id="email"
                className="input-step p-3  my-4"
                type="text"
                placeholder="Type your Phone"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </label>
            {errors.email && touched.email && (
              <p className="text-danger mb-0">{errors.email}</p>
            )}
          </div>
          <div className=" step p-0">
            <div className="d-flex">
            

              <Paragraph className="title-white-sm  d-flex ">
                What's Your Email?
              </Paragraph>
            </div>
            <label htmlFor="email" className="form-label">
              <input
                autocomplete="off"
                id="email"
                className="input-step p-3  my-4"
                type="text"
                placeholder="Type your email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </label>
            {errors.email && touched.email && (
              <p className="text-danger mb-0">{errors.email}</p>
            )}
          </div>
          <div className=" step p-0">
            <div className="d-flex">
              {/* <Paragraph className="title-white-sm mb-4 d-flex  ">
                {num}
                <img src={Arrow} alt="#" className="mx-3" />
              </Paragraph> */}

              <Paragraph className="title-white-sm  d-flex ">
                What's Your password ?
              </Paragraph>
            </div>
            <label htmlFor="email" className="form-label">
              <input
                autocomplete="off"
                id="email"
                className="input-step p-3 my-4"
                type="text"
                placeholder="Type your password "
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </label>
            {errors.email && touched.email && (
              <p className="text-danger mb-0">{errors.email}</p>
            )}
          </div>
        </div>
      </>
    );
};
export default CasePass;