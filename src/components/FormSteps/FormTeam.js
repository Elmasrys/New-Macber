import Paragraph from "../../UI/Paragraph";
import Button from "../../UI/Button";
import { Formik } from "formik";
import { SendRequest , SendRequestEmail } from "./Logic";
import { useState } from "react";
import CaseGoal from "./Cases/CaseOne/CaseGoal";
import CasePlatForm from "./Cases/CaseOne/CasePlatForm";
import CaseName from "./Cases/CaseName";
import CaseCountry from "./Cases/CaseCountry";
import CaseEmail from "./Cases/CaseEmail";
import CaseNumber from "./Cases/CaseNumber";
import CaseThanks from "./Cases/CaseThanks";
const FormTeam = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [error, seterror] = useState();
  const HandelBack = () => {
    setcurrentStep(currentStep - 1);
  };
  const validateStep1 = (values) => {
    const errors = {};
    if (!values.developer) {
      errors.developer = "Select an option";
    }
    seterror(errors.developer);
    return errors;
  };

  const validateStep2 = (values) => {
    const errors = {};
    if (!values.long) {
      errors.long = "Select an option";
    }
    seterror(errors.long);
    return errors;
  };
  const validateStep3 = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    seterror(errors.name);
    return errors;
  };
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateStep4 = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "email is required";
    } else if (!pattern.test(values.email)) {
      errors.email = "please enter a vaild email address";
    }
    seterror(errors.email);
    return errors;
  };

  const validateStep5 = (values) => {
    const errors = {};
    if (!values.country) {
      errors.country = "country is required";
    }
    seterror(errors.country);
    return errors;
  };
  const validateStep6 = (values) => {
    const errors = {};
    if (!values.phone && values.phone.length > 8) {
      errors.phone = "phone is required";
    }
    seterror(errors.phone);
    return errors;
  };

  const HandelSubmit = async (values) => {
    try {
      const result = await SendRequest(
        values.email,
        values.name,
        values.phone,
        values.country,
        values.developer,
        values.long
      );
      setcurrentStep(7);
      const emailResult = await SendRequestEmail(values.email);
      console.log(emailResult , 'tese');
    } catch (error) {
      console.log(error);
    }
  };
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
      case 1:
        return (
          <CaseGoal
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 2:
        return (
          <CasePlatForm
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 3:
        return (
          <CaseName
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 4:
        return (
          <CaseEmail
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 5:
        return (
          <CaseCountry
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            valueCountry={getCountry}
          />
        );
      case 6:
        return (
          <CaseNumber
            // country={getCountry}
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 7:
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
      <div className="bg_form_type text-center">
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
              if (currentStep === 1) {
                errors = validateStep1(values);
              } else if (currentStep === 2) {
                errors = validateStep2(values);
              } else if (currentStep === 3) {
                errors = validateStep3(values);
              } else if (currentStep === 4) {
                errors = validateStep4(values);
              } else if (currentStep === 5) {
                errors = validateStep5(values);
              } else if (currentStep === 6) {
                errors = validateStep6(values);
              }
              if (Object.keys(errors).length === 0) {
                if (currentStep === 6) {
                  HandelSubmit(values);
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
                  <div className="btns-typeForm ">
                    {currentStep === 1 ||
                      (currentStep < 7 && (
                        <Button
                          tagType="link"
                          className="btn-white-two btn_step_back"
                          onclick={HandelBack}
                        >
                          Back
                        </Button>
                      ))}
                    {currentStep < 7 && (
                      <Button
                        tagType="button"
                        type="submit"
                        className={
                          currentStep < 6
                            ? " btn-next-step btn_step_back"
                            : " btn-next-step btn_step_back estimate"
                        }
                      >
                        {currentStep < 6 ? "Next" : "Get an Estimate"}
                      </Button>
                    )}
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
export default FormTeam;
