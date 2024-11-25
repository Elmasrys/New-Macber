import Input from '../UI/Input';
import Button from './Button';
import Paragraph from './Paragraph';
import { Formik } from 'formik';
import * as Yup from "yup";

const Form = (props)=>{
    return (
        <>
        <Formik 
            initialValues={
                { 
                    name: '',
                    phone: '',
                    email: '',
                    company: '',
                    reason: '',
                    message: ''
                }
            }
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Required'),
                phone: Yup.string().required('Required'),
                email: Yup.string().email().required('Required'),
                company: Yup.string().required('Required'),
                reason: Yup.string().required('Required'),
                message: Yup.string().required('Required'),
            })}>
    {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <Input
                id={"name"}
                type={"text"}
                name={"name"}
                placeholder={"Your Name"}
                label={"name"}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              {errors.name && touched.name && (
                <Paragraph className="text-danger">{errors.name}</Paragraph>
              )}
            </div>
            <div className="col-md-6">
              <Input
                id={"phone"}
                type={"text"}
                name={"phone"}
                placeholder={"phone"}
                label={"phone"}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.phone && touched.phone
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              {errors.phone && touched.phone && (
                <Paragraph className="text-danger">{errors.phone}</Paragraph>
              )}
            </div>
            <div className="col-md-6">
              <Input
                id={"email"}
                type={"email"}
                name={"email"}
                placeholder={"email"}
                label={"email"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              {errors.email && touched.email && (
                <Paragraph className="text-danger">{errors.email}</Paragraph>
              )}
            </div>
            <div class="col-md-6">
              <Input
                id={"company"}
                type={"text"}
                name={"company"}
                placeholder={"company"}
                label={"company"}
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.company && touched.company
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              {errors.company && touched.company && (
                <Paragraph className="text-danger">{errors.company}</Paragraph>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="reason" class="form-label">
                Reason
              </label>
              <select
                id={"reason"}
                name={"reason"}
                placeholder={"reason"}
                value={values.reason}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.reason && touched.reason
                    ? "form-select is-invalid"
                    : "form-select"
                }
              >
                <option selected disabled value="">
                  select Reason
                </option>
                <option>...</option>
              </select>
              {errors.reason && touched.reason && (
                <Paragraph className="text-danger">{errors.reason}</Paragraph>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="validationTextarea" class="form-label">
                Message
              </label>
              <textarea
                id={"message"}
                name={"message"}
                placeholder={"message"}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.message && touched.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
              ></textarea>
              {errors.message && touched.message && (
                <Paragraph className="text-danger">{errors.message}</Paragraph>
              )}
            </div>

            {/* <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button> */}
            <div className="col-md-7">
              <Paragraph className="">
                By proceeding, you are agreeing to Macber Company's{" "}
                <Button tagType="link" className="p-0 custom-link">
                  privacy policy
                </Button>{" "}
                & communication
              </Paragraph>
            </div>
            <div class="col-md-5 d-flex justify-content-end">
              <Button
                className="btn-blue btn-scale  "
                type="submit"
                tagType="button"
              >
                Get In Touch
              </Button>
            </div>
          </form>
        );}}
        </Formik>
        </>
    )
}
export default Form;



