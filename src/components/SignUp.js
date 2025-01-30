import FormTeam from "./FormSteps/FormTeam";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import CasePass from "./FormSteps/Cases/CaseOne/CasePass";
import Otp from "./FormSteps/Cases/CaseOne/Otp";
import { useNavigate } from "react-router-dom";
import CaseThanks from "./FormSteps/Cases/CaseThanks";
const SignUp = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const navigate = useNavigate();

  const HandelBack = (e) => {
    if (currentStep > 1) {
      e.preventDefault();
      setcurrentStep((prevStep) => prevStep - 1);
    }
  };

  const [countryNum, setCountryNum] = useState();
  const getCountry = (country) => {
    setCountryNum(country);
  };

  // Validation schemas for each step
  const validationSchema = Yup.object().shape(
    currentStep === 1
      ? {
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
          Phone: Yup.string()
          .matches(/^[0-9]+$/, "Phone number must contain only digits")
          .min(10, "Phone number must be at least 10 digits")
          .max(15, "Phone number can't exceed 15 digits")
          .required("Phone number is required"),
        name: Yup.string()
          .min(2, "Name must be at least 2 characters")
          .max(50, "Name can't exceed 50 characters")
          .required("Name is required"),

      }  : currentStep === 2
      ? {
          Otp: Yup.string()
            .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
            .min(1000, "OTP must be exactly 6 digits")
            .max(1950, "OTP must be exactly 6 digits")
            .required("OTP is required"),
        }

      : {}
  );

  const renderStepOne = (step, values, touched, errors, handleChange, handleBlur) => {
    switch (step) {
      case 1:
        return (
          
          <CasePass
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
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 3:
        return (
          <CaseThanks
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
              password: "",
              name:"",
              Otp: "",
              Phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              // console.log("Form Submitted Values: ", values);
              if (currentStep === 3) {
                navigate("/");
              } else {
                setcurrentStep((currentStep) => currentStep + 1);
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
                  {/* {Object.keys(errors).length > 0 && (
                    <p className="text-danger mb-0">{errors[Object.keys(errors)[0]]}</p>
                  )} */}
                  <div className="btns-typeForm">
                    {currentStep < 1 && (
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
                        currentStep < 3
                          ? "btn-next-step btn_step_back"
                          : "btn-next-step btn_step_back estimate d-none"
                      }
                    >
                      {currentStep < 2
                        ? "Next"
                        : currentStep === 2
                        && "Submit"
                      }
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignUp;
