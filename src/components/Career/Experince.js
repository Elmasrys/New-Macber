import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import Media from "../../UI/Media";
import Paragraph from "../../UI/Paragraph";
import arrow from "../../assets/icons/arrowright.svg";
const Experience = (props) => {
  const id = 5;
  return (
    <>
      <div className="row border-career justify-content-between">
        <div className="col-xl-6 col-sm-12 d-flex align-items-center justify-content-between">
          <Paragraph className="text-capitalize mb-xl-0 mb-sm-2 bold-500">
            {props.title}
          </Paragraph>
          <div className="mt-5  mt-xl-0 ">
            <Paragraph className="text-capitalize mb-xl-0 mb-sm-2 lightGrey5">
              {props.Experience}
            </Paragraph>
            <Paragraph className="text-capitalize mb-xl-0 mb-sm-2 bold-500">
              {props.Years}
            </Paragraph>
          </div>
        </div>
        <div className="col-xl-5 col-sm-12  d-flex align-items-center justify-content-between">
          <div>
            <Paragraph className="text-capitalize mb-xl-0 mb-sm-2 lightGrey5">
              {props.Deadline}
            </Paragraph>
            <Paragraph className="text-capitalize mb-xl-0 mb-sm-2 fw-500">
              {props.date}
            </Paragraph>
          </div>
          <Link
            className="lightBlue3 bold-700 p-0 text-capitalize me-2"
            to={`${id}`}
          >
            see more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Experience;
