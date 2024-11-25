import React from 'react'
import Paragraph from "../../UI/Paragraph";
import { useState } from "react";
import Button from "../../UI/Button";
import "../FormSteps/formtype.css";
import { useForm } from "../../context/ContextForm";
import Arrow from "../../assets/icon/arrowRight.svg"

const FormTwo =()=> {
      const FormItem = useForm();
      const ProductForm = useForm();
      const [result, setResult] = useState("");
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        try {
          const formData = new FormData();

          formData.append("access_key", "2b9a9acc-94d2-4c21-891a-1030829d8ede");
          formData.append("email", email);
          formData.append("answer", answer);
          formData.append("number", number);
          formData.append("country", country);
          formData.append("radioDeveloper", boxDevelopers);
          formData.append("radioLong", boxLong);

          const object = Object.fromEntries(formData);
          const jsonData = JSON.stringify(object);

          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: jsonData,
          });
          setResult(res.message);
        } catch (error) {
          console.log(error);
        }
      };
      const [input, setInput] = useState(false);
      function handleInput(e) {
        FormItem.handleForm(e.target.id);
        setInput(!input);
      }
      const [answer, setAnswer] = useState("");
      const [number, setnumber] = useState("");
      const [email, setEmail] = useState("");
      const [boxDevelopers, setBoxDevelopers] = useState("");
      const [boxLong, setBoxLong] = useState("");
      const [country, setcountry] = useState("");

      const [currentStep, setCurrentStep] = useState(1);

      const renderSteps2 = () => {
        switch (currentStep) {
          case 1:
            return (
              <>
                <div className="container py-4">
                  <div className=" step pt-0">
                    <div className="d-flex">
                      <Paragraph className="title-white text-capitalize mb-4 ">
                        1
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>
                      <Paragraph className="title-white text-capitalize mb-4">
                        How many developers do you need?
                      </Paragraph>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioDeveloper"
                        id="flexRadioDefault1"
                        onChange={(e) => setBoxDevelopers(e.target.value)}
                        value="1-3"
                        key="1"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault1"
                      >
                        1-3
                      </label>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioDeveloper"
                        id="flexRadioDefault2"
                        onChange={(e) => setBoxDevelopers(e.target.value)}
                        value="3-5"
                        key="2"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault2"
                      >
                        3-5
                      </label>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioDeveloper"
                        id="flexRadioDefault3"
                        onChange={(e) => setBoxDevelopers(e.target.value)}
                        value="5-10"
                        key="3"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault3"
                      >
                        5-10
                      </label>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioDeveloper"
                        id="flexRadioDefault4"
                        onChange={(e) => setBoxDevelopers(e.target.value)}
                        value="+ 10"
                        key="4"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault4"
                      >
                        + 10
                      </label>
                    </div>
                  </div>
                </div>
              </>
            );
          case 2:
            return (
              <>
                <div className="container py-4">
                  <div className=" step pt-0">
                    <div className="d-flex">
                      <Paragraph className="title-white text-capitalize mb-4 ">
                        2
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>
                      <Paragraph className="title-white text-capitalize mb-4">
                        How long for?
                      </Paragraph>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        id="flexRadioDefault5"
                        onChange={(e) => setBoxLong(e.target.value)}
                        value="1-3"
                        key="5"
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
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        id="flexRadioDefault6"
                        onChange={(e) => setBoxLong(e.target.value)}
                        value="3-6"
                        key="6"
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
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        id="flexRadioDefault7"
                        onChange={(e) => setBoxLong(e.target.value)}
                        value="6-12"
                        key="7"
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
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        id="flexRadioDefault8"
                        onChange={(e) => setBoxLong(e.target.value)}
                        value="Im not sure"
                        key="8"
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
          case 3:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white mb-4 d-flex  ">
                        3
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>

                      <Paragraph className="title-white mb-4 d-flex ">
                        What's your Name ?
                      </Paragraph>
                    </div>
                    <label htmlFor="answer" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="text"
                        name="answer"
                        placeholder="Type your answer here"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 4:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white mb-4 d-flex  ">
                        4
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>

                      <Paragraph className="title-white mb-4 d-flex ">
                        What's Your Email?
                      </Paragraph>
                    </div>
                    <label htmlFor="answer" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="email"
                        name="email"
                        placeholder="Type your answer here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 5:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white mb-4 d-flex  ">
                        5
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>

                      <Paragraph className="title-white mb-4 d-flex ">
                        What's Your Country?
                      </Paragraph>
                    </div>
                    <label htmlFor="answer" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="text"
                        name="country"
                        placeholder="Type your answer here"
                        value={country}
                        onChange={(e) => setcountry(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 6:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white mb-4 d-flex  ">
                        6
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>

                      <Paragraph className="title-white mb-4 d-flex ">
                        What's Your Number?
                      </Paragraph>
                    </div>
                    <label htmlFor="answer" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="text"
                        name="number"
                        placeholder="Type your answer here"
                        value={number}
                        onChange={(e) => setnumber(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 7:
            return (
              <>
                <div className="container py-5">
                  <div className="text-center pt-145 form-type">
                    <Paragraph className="title-white mb-5 ">
                      Thank you for taking the time to share your details.
                    </Paragraph>
                    <Button
                      tagType="button"
                      type="submit"
                      className="btn-blue btn-scale "
                    >
                      Get an Estimate
                      <span>{result}</span>
                    </Button>
                  </div>
                </div>
              </>
            );
          default:
            return null;
        }
      };

      const renderStep = () => {
        switch (currentStep) {
          case 1:
            return (
              <>
                <div className="container py-4">
                  <div className=" step pt-65">
                    <div className="d-flex">
                      <Paragraph className="title-white text-capitalize mb-4 ">
                        1
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>
                      <Paragraph className="title-white text-capitalize mb-4">
                        What is Your Goal?
                      </Paragraph>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioDeveloper"
                        onChange={(e) => setBoxDevelopers(e.target.value)}
                        key="11"
                        id="flexRadioDefault11"
                        value="Mobile"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault11"
                      >
                        Mobile
                      </label>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioDeveloper"
                        onChange={(e) => setBoxDevelopers(e.target.value)}
                        key="12"
                        id="flexRadioDefault12"
                        value="web"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault12"
                      >
                        Web
                      </label>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        id="flexRadioDefault13"
                        value=" Both"
                        class="custom-checkbox"
                        type="radio"
                        name="radioDeveloper"
                        onChange={(e) => setBoxDevelopers(e.target.value)}
                        key="13"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault13"
                      >
                        Both
                      </label>
                    </div>
                  </div>
                </div>
              </>
            );
          case 2:
            return (
              <>
                <div className="container py-4">
                  <div className=" step pt-0">
                    <div className="d-flex">
                      <Paragraph className="title-white text-capitalize mb-4 ">
                        2
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>
                      <Paragraph className="title-white text-capitalize mb-4">
                        Choose Platform :
                      </Paragraph>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        onChange={(e) => setBoxLong(e.target.value)}
                        key="14"
                        id="flexRadioDefault14"
                        value="Product Development"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault14"
                      >
                        Product Development
                      </label>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        id="flexRadioDefault15"
                        onChange={(e) => setBoxLong(e.target.value)}
                        key="15"
                        value="UX/UI Design"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault15"
                      >
                        UX/UI Design
                      </label>
                    </div>
                    <div className="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        onChange={(e) => setBoxLong(e.target.value)}
                        key="16"
                        value="Develop an MVP"
                        id="flexRadioDefault16"
                      />
                      <label
                        class="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault16"
                      >
                        Develop an MVP
                      </label>
                    </div>
                    <div class="form-check d-flex check_border mb-3">
                      <input
                        className="custom-checkbox"
                        type="radio"
                        name="radioLong"
                        onChange={(e) => setBoxLong(e.target.value)}
                        key="4"
                        value=" All of the Above"
                        id="flexRadioDefault17"
                      />
                      <label
                        className="form-check-label title-white-sm text-capitalize mb-0 ms-5"
                        htmlFor="flexRadioDefault17"
                      >
                        All of the Above
                      </label>
                    </div>
                  </div>
                </div>
              </>
            );
          case 3:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white text-capitalize mb-4 ">
                        3
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>
                      <Paragraph className="title-white text-capitalize mb-4">
                        What’s your Name ?
                      </Paragraph>
                    </div>

                    <label htmlFor="answer" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="text"
                        name="answer"
                        value={answer}
                        placeholder="Type your answer here"
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 4:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white mb-4 d-flex ">
                        4
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>

                      <Paragraph className="title-white mb-4 d-flex ">
                        What’s Your Email?
                      </Paragraph>
                    </div>
                    <label htmlFor="email" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Type your answer here"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 5:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white mb-4 d-flex  ">
                        5
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>

                      <Paragraph className="title-white mb-4 d-flex ">
                        What’s Your Country?
                      </Paragraph>
                    </div>
                    <label htmlFor="country" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="text"
                        name="country"
                        value={country}
                        placeholder="Type your answer here"
                        onChange={(e) => setcountry(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 6:
            return (
              <>
                <div className="container py-4 pt-95">
                  <div className=" step ">
                    <div className="d-flex">
                      <Paragraph className="title-white mb-4 d-flex  ">
                        6
                        <img src={Arrow} alt="#" className="mx-3" />
                      </Paragraph>

                      <Paragraph className="title-white mb-4 d-flex ">
                        What’s Your Number?
                      </Paragraph>
                    </div>
                    <label htmlFor="Number" className="form-label">
                      <input
                        required
                        className="input-step  my-5"
                        type="text"
                        name="Number"
                        value={number}
                        placeholder="Type your answer here"
                        onChange={(e) => setnumber(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          case 7:
            return (
              <>
                <div className="container py-5">
                  <div className="text-center pt-145 form-type">
                    <Paragraph className="title-white mb-5 ">
                      Thank you for taking the time to share your details.
                    </Paragraph>
                    <Button
                      tagType="button"
                      type="submit"
                      className="btn-blue btn-scale "
                    >
                      Get an Estimate
                      <span>{result}</span>
                    </Button>
                  </div>
                </div>
              </>
            );
          default:
            return null;
        }
      };
  return (
    <>
      <div className="bg_form_type  text-center" id="contact-us">
        <div className="bg_form_type_overlay"></div>
          <div className="flex_step">
            <form onSubmit={onSubmit}>
              {ProductForm.FormOne === "Build your product"
                ? renderStep()
                : renderSteps2()}
            </form>
            <div className="d-flex">
              {currentStep == 1 ||
                (currentStep < 7 && (
                  <Button
                    tagType="button"
                    className=" btn-white-two btn_step_back"
                    onclick={() => setCurrentStep(currentStep - 1)}
                  >
                    Back
                  </Button>
                ))}
              {currentStep < 7 && (
                <Button
                  tagType="button"
                  className="  btn_step"
                  onclick={() => setCurrentStep(currentStep + 1)}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        {/* </div>{" "} */}
        
      </div>
    </>
  );
}

export default FormTwo
