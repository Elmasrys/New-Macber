import Paragraph from "../../UI/Paragraph";
import BackGroundLight from '../../Layout/BackGroundLight';
import './Experience.css';
import { HashLink } from "react-router-hash-link";
const WhereStart =(props)=>{
    return (
      <>
        <BackGroundLight className="backGround_light text-center height_special d-flex justify-content-center align-items-center py-4">
          <div className="container">
            <Paragraph
              className={`${
                props.className_sec
              } ${"service-title m-0 font-45"}`}
            >
              {props.sectionTitle}
            </Paragraph>
            {/* <br /> */}
            <Paragraph className="service-title m-0  font-45">
              {props.sectionTitleBr}
            </Paragraph>
            <Paragraph className="use-business pb-4 w-50  mx-auto">
              {props.sectionDesc}
            </Paragraph>
            <HashLink
              to="/contact-us"
              smooth
              className="lightWhite text-decoration-none btn-blue btn-scale btn"
            >
              {props.link}
            </HashLink>
          </div>
        </BackGroundLight>
      </>
    );
}
export default WhereStart;