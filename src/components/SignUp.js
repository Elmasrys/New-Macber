import FormTeam from "./FormSteps/FormTeam";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import { Formik } from "formik";
// import { SendRequest , SendRequestEmail } from "./Logic";
import { useState } from "react";
import CaseGoal from "../components/FormSteps/Cases/CaseOne/CaseGoal";
import CasePlatForm from "../components/FormSteps/Cases/CaseOne/CasePlatForm";
import CaseName from "../components/FormSteps/Cases/CaseName";
import CaseCountry from "../components/FormSteps/Cases/CaseCountry";
import CaseEmail from "../components/FormSteps/Cases/CaseEmail";
import CaseNumber from "../components/FormSteps/Cases/CaseNumber";
import CaseThanks from "../components/FormSteps/Cases/CaseThanks";
import CasePass from "./FormSteps/Cases/CaseOne/CasePass";
import Otp from "./FormSteps/Cases/CaseOne/Otp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [currentStep, setcurrentStep] = useState(1);
    const [error, seterror] = useState();
    const navigate = useNavigate();
    const HandelBack = () => {
      setcurrentStep(currentStep - 1);
    };
    // const validateStep1 = (values) => {
    //   const errors = {};
    //   if (!values.developer) {
    //     errors.developer = "Select an option";
    //   }
    //   seterror(errors.developer);
    //   return errors;
    // };
  
    // const validateStep2 = (values) => {
    //   const errors = {};
    //   if (!values.long) {
    //     errors.long = "Select an option";
    //   }
    //   seterror(errors.long);
    //   return errors;
    // };
    // const validateStep3 = (values) => {
    //   const errors = {};
    //   if (!values.name) {
    //     errors.name = "Name is required";
    //   }
    //   seterror(errors.name);
    //   return errors;
    // };
    // const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const validateStep4 = (values) => {
    //   const errors = {};
    //   if (!values.email) {
    //     errors.email = "email is required";
    //   } else if (!pattern.test(values.email)) {
    //     errors.email = "please enter a vaild email address";
    //   }
    //   seterror(errors.email);
    //   return errors;
    // };
  
    // const validateStep5 = (values) => {
    //   const errors = {};
    //   if (!values.country) {
    //     errors.country = "country is required";
    //   }
    //   seterror(errors.country);
    //   return errors;
    // };
    // const validateStep6 = (values) => {
    //   const errors = {};
    //   if (!values.phone && values.phone.length > 8) {
    //     errors.phone = "phone is required";
    //   }
    //   seterror(errors.phone);
    //   return errors;
    // };
  
    // const HandelSubmit = async (values) => {
    //   try {
    //     const result = await SendRequest(
    //       values.email,
    //       values.name,
    //       values.phone,
    //       values.country,
    //       values.developer,
    //       values.long
    //     );
    //     setcurrentStep(7);
    //     const emailResult = await SendRequestEmail(values.email);
    //     console.log(emailResult , 'tese');
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    const [countryNum , setCountryNum ] = useState()
    const getCountry = (country)=>{
      console.log(country);
      setCountryNum(country);
      
    }
    const renderStepOne = (
      step,
      values,
      touched,
      errors,
      handleChange,
      handleBlur
    ) => {
      switch (step) {
        // case 1:
        //   return (
        //     <CaseName
        //     num={1}
        //       values={values}
        //       touched={touched}
        //       errors={errors}
        //       handleChange={handleChange}
        //       handleBlur={handleBlur}
        //     />
        //   );
        //   case 2:
        //     return (
        //       <CaseNumber
        //       num={2}
        //         // country={getCountry}
        //         values={values}
        //         touched={touched}
        //         errors={errors}
        //         handleChange={handleChange}
        //         handleBlur={handleBlur}
        //       />
        //     );
      
        // case 3:
        //   return (
        //     <CaseEmail
        //     num={3}
        //       values={values}
        //       touched={touched}
        //       errors={errors}
        //       handleChange={handleChange}
        //       handleBlur={handleBlur}
        //     />
        //   );
        case 1:
          return (
            <CasePass
            num={4}
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              valueCountry={getCountry}
            />
          );
  
        case 2:
          return (
            <Otp
            num={5}
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          );
        default:
          return null;
      }
    };
    return (
        <>
        <span id="form" className="py-5"></span>
        <div className="bg_form_type text-center h-120">
          <div className="bg_form_type_overlay">
            <Formik
              initialValues={{
                email: "",
                name: "",
                phone: "",
                country: "",
                developer: "",
                long: "",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                let errors = {};
    
                if (Object.keys(errors).length === 0) {
                  if (currentStep === 2) {
                    // HandelSubmit(values);
                    navigate("/")
                  } else {
                    setcurrentStep((currentStep) => currentStep + 1);
                  }
                }
  
                setSubmitting(false);
              }}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                    <form className="flex_step" onSubmit={handleSubmit}>
                  {renderStepOne(
                    currentStep,
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur
                  )}
                  {error && <p className="text-danger mb-0">{error}</p>}
                  <div className="btns-typeForm">
                    {currentStep > 1 && (
                      <Button
                        tagType="link"
                        className="btn-white-two btn_step_back"
                        onClick={HandelBack}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      tagType="button"
                      type="submit"
                      className={
                        currentStep < 5
                          ? "btn-next-step btn_step_back"
                          : "btn-next-step btn_step_back estimate"
                      }
                    >
                      {currentStep < 5
                        ? "Next"
                        : currentStep === 5
                        ? "Submit"
                        : "Finish"}
                    </Button>
                  </div>
                </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </>)
}

export default SignUp;