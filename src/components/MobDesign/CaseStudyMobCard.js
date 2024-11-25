import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "../../UI/Paragraph";

const CaseStudyMobCard = (props) => {
  return (
    <>
      <Link to={props.to}>
        <div className="card-caseStudy-mob">
          <img src={props.srclogo} />
          <Paragraph className="card-caseStudy-mob-logo m-0">
            {props.span}
            <br />
            {props.platform}
          </Paragraph>
          <Paragraph className="card-caseStudy-mob-title">
            {props.title}
          </Paragraph>
        </div>
        <img className="w-100 border-radus-32" alt="" src={props.srcImg} />
      </Link>
    </>
  );
};

export default CaseStudyMobCard;
