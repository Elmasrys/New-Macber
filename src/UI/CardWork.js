import Button from "./Button";
import Paragraph from "./Paragraph";
import Media from "./Media";
import { Link } from "react-router-dom";
const CardWork = (props) => {
  return (
    <>
      <div className={ "works_projects py-5"}>
        <span className="line_top"></span>
        {props.children}
        <div className="works_projects_title">
          <Paragraph className="desc-black w-80 mx-auto ">
            {props.desc}
          </Paragraph>
          <div className="ms-xl-5">
            <Button className="btn_works_projects" tagType="link" to={props.to}>
              {props.btn1}
            </Button>
            {props.btn2 ? (
              <Button
                className="btn_works_projects"
                tagType="link"
                to={props.to2}
              >
                {props.btn2}
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
         <Link to={props.toImg}>
          
        <Media type="img" src={props.src_Image} className='border-radus-32'/>
        </Link>
      </div>
    </>
  );
};

export default CardWork;
