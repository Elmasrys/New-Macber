import { useState } from "react";
import { Formik } from "formik";
import Button from "../../UI/Button";
import CaseDev from "./Cases/CaseDev";
import CaseLong from "./Cases/CaseLong";
import CaseName from "./Cases/CaseName";
import CaseEmail from "./Cases/CaseEmail";
import CaseCountry from "./Cases/CaseCountry";
import CaseNumber from "./Cases/CaseNumber";
import CaseThanks from "./Cases/CaseThanks";
import { SendRequest , SendRequestEmail } from "./Logic";

const FormProject = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  const HandelBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const validateStep1 = (values) => {
    const errors = {};

    if (!values.developer) {
      errors.developer = "Select an option";
    }
    setError(errors.developer);
    return errors;
  };

  const validateStep2 = (values) => {
    const errors = {};

    if (!values.long) {
      errors.long = "Select an option";
    }
    setError(errors.long);

    return errors;
  };

  const validateStep3 = (values) => {
    const errors = {};

    if (!values.name ) {
      errors.name = "Name is required";
    }

    setError(errors.name);
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
    setError(errors.email);
    return errors;
  };

  const validateStep5 = (values) => {
    const errors = {};

    if (!values.country && values.name.length > 8) {
      errors.country = "country is required";
    }
    setError(errors.country);
    return errors;
  };

  const validateStep6 = (values) => {
    const errors = {};

    if (!values.phone)  {
      errors.phone = "phone is required";
    }

    setError(errors.phone);
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
      const emailResult = await SendRequestEmail(values.email);

      setCurrentStep(7);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const renderSteps2 = (
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
          <CaseDev
          num={1}
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 2:
        return (
          <CaseLong
          num={2}
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
          num={3}
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
          num={4}
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
          num={5}
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 6:
        return (
          <CaseNumber
          num={6}
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
      <div className="bg_form_type text-center position-relative">
        <span id="form" className="py-5"></span>
        <div className="bg_form_type_overlay">
          <Formik
            initialValues={{
              developer: "",
              long: "",
              name: "",
              email: "",
              country: "",
              phone: "",
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
                  setCurrentStep((currentStep) => currentStep + 1);
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
                <>
                  {/* <span id="form"></span> */}

                  <form className="flex_step" onSubmit={handleSubmit}>
                    {renderSteps2(
                      currentStep,
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur
                    )}
                    {error && <p className="text-danger">{error}</p>}
                    <div className="d-flex">
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
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default FormProject;
