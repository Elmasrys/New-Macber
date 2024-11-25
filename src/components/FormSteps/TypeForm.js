import "../FormSteps/formtype.css";
import Paragraph from "../../UI/Paragraph";
import Button from "../../UI/Button";
import { HashLink } from "react-router-hash-link";
const TypeForm = () => {

  return (
    <>
      <div className="bg_form_type text-center">
        <div className="bg_form_type_overlay">
          <div className={"text-center pt-17 form-type "}>
            <Paragraph className="title_white bold-700 mb-4 ">
              Contact us let's work
              <br />
              together.
            </Paragraph>
            <Paragraph className="title-white-sm letter-5 mb-4">
              Your Insights Fuel Our Solutions.
            </Paragraph>
            <div className="header-btn align-items-center">
              <HashLink
                tagType="link"
                id="Build your product"
                className="btn-white btn-scale text-decoration-none btn"
                to={"/contact-us/project#form"}
              >
                Build your product
              </HashLink>
              <HashLink
                tagType="link"
                id="Build your Team"
                className="  btn-white-two mx-3  btn-scale text-decoration-none "
                to={"/contact-us/team#form"}
              >
                Build your Team
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeForm;
