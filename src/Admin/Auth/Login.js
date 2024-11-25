import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Paragraph from '../../UI/Paragraph';
import { Formik } from 'formik';
import * as Yup from "yup";

const Login = (props) => {
    return (
        <>
            <Formik 
                initialValues={
                    { 
                        email: '',
                        password: ''
                    }
                }
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required('Required'),
                    password: Yup.string().required('Required'),
                })}
            >
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
                                id={'email'}
                                type={'email'}
                                name={'email'}
                                placeholder={'email'}
                                label={'email'}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email && touched.email
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                                />
                            {errors.email && touched.email && <Paragraph className='text-danger'>{errors.email}</Paragraph>}
                        </div>
                        <div class="col-md-6">
                            <Input 
                                id={'company'}
                                type={'text'}
                                name={'company'}
                                placeholder={'company'}
                                label={'company'}
                                value={values.company}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.company && touched.company
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                                />
                            {errors.company && touched.company && <Paragraph className='text-danger'>{errors.company}</Paragraph>}
                        </div>
                    {/* <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                    >
                    Reset
                    </button> */}
                        <div class="col-md-5">
                            <Button className="btn-blue px-5 py-3 btn-scale" type="submit" tagType='button'>submit</Button>
                        </div>
                </form>
                )}}
            </Formik>
        </>
    );
}
export default Login;