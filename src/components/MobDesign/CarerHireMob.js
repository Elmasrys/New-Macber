import React from "react";
import Paragraph from "../../UI/Paragraph";
import { Link } from "react-router-dom";
import { useState } from "react";
const CarerHireMob = () => {
      const [activeTab, setActiveTab] = useState("Design");

      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };


  return (
    <>
      <div className="carer-mob">
        <ul className="d-flex justify-content-between text-center p-0">
          <li
            onClick={() => handleTabClick("Design")}
            className={
              activeTab === "Design"
                ? "text-capitalize Carer-btn blue"
                : "text-capitalize Carer-btn "
            }
          >
            Design
          </li>
          <li
            onClick={() => handleTabClick("Development")}
            className={
              activeTab === "Development"
                ? "text-capitalize Carer-btn blue"
                : "text-capitalize Carer-btn "
            }
          >
            Development
          </li>
          <li
            onClick={() => handleTabClick("gaming")}
            className={
              activeTab === "gaming"
                ? "text-capitalize Carer-btn blue"
                : "text-capitalize Carer-btn "
            }
          >
            gaming
          </li>
          <li
            onClick={() => handleTabClick("operation")}
            className={
              activeTab === "operation"
                ? "text-capitalize Carer-btn  blue"
                : "text-capitalize Carer-btn "
            }
          >
            operation
          </li>
        </ul>
        <div
          className={
            activeTab === "Development"
              ? "row Carer-Card  "
              : "row Carer-Card  hide "
          }
        >
          <div className="col-12 text-center">
            <Paragraph className="text-capitalize">Senior front end</Paragraph>
          </div>
          <div className="col-6 flex-column  text-center">
            <Paragraph className="text-capitalize">Experience</Paragraph>
            <Paragraph className="text-capitalize">2 Years</Paragraph>
          </div>
          <div className="col-6  flex-column   text-center">
            <Paragraph className="text-capitalize">Deadline</Paragraph>
            <Paragraph className="text-capitalize">2024-01-15</Paragraph>
          </div>
          <div className="col-12  text-center">
            <Link
              className="lightBlue3 bold-700 p-0 text-capitalize me-2"
              to={`/joinMacber/5`}
            >
              see more
            </Link>
          </div>
        </div>
        <div
          className={
            activeTab === "Design"
              ? "row Carer-Card  "
              : "row Carer-Card  hide "
          }
        >
          <div className="col-12 text-center">
            <Paragraph className="text-capitalize">Javascript</Paragraph>
          </div>
          <div className="col-6 flex-column  text-center">
            <Paragraph className="text-capitalize">Experience</Paragraph>
            <Paragraph className="text-capitalize">3 Years</Paragraph>
          </div>
          <div className="col-6  flex-column   text-center">
            <Paragraph className="text-capitalize">Deadline</Paragraph>
            <Paragraph className="text-capitalize">2024-01-15</Paragraph>
          </div>
          <div className="col-12  text-center">
            <Link
              className="lightBlue3 bold-700 p-0 text-capitalize me-2"
              to={`/joinMacber/5`}
            >
              see more
            </Link>
          </div>
        </div>
        <div
          className={
            activeTab === "gaming"
              ? "row Carer-Card  "
              : "row Carer-Card  hide "
          }
        >
          <div className="col-12 text-center">
            <Paragraph className="text-capitalize">Apps Developer</Paragraph>
          </div>
          <div className="col-6 flex-column  text-center">
            <Paragraph className="text-capitalize">Experience</Paragraph>
            <Paragraph className="text-capitalize">1 Years</Paragraph>
          </div>
          <div className="col-6  flex-column   text-center">
            <Paragraph className="text-capitalize">Deadline</Paragraph>
            <Paragraph className="text-capitalize">2024-01-15</Paragraph>
          </div>
          <div className="col-12  text-center">
            <Link
              className="lightBlue3 bold-700 p-0 text-capitalize me-2"
              to={`/joinMacber/5`}
            >
              see more
            </Link>
          </div>
        </div>
        <div
          className={
            activeTab === "operation"
              ? "row Carer-Card  "
              : "row Carer-Card  hide "
          }
        >
          <div className="col-12 text-center">
            <Paragraph className="text-capitalize">operation</Paragraph>
          </div>
          <div className="col-6 flex-column  text-center">
            <Paragraph className="text-capitalize">Experience</Paragraph>
            <Paragraph className="text-capitalize">2 Years</Paragraph>
          </div>
          <div className="col-6  flex-column   text-center">
            <Paragraph className="text-capitalize">Deadline</Paragraph>
            <Paragraph className="text-capitalize">2024-01-15</Paragraph>
          </div>
          <div className="col-12  text-center">
            <Link
              className="lightBlue3 bold-700 p-0 text-capitalize me-2"
              to={`/joinMacber/5`}
            >
              see more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarerHireMob;
