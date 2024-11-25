import { useNavigate  ,Link} from "react-router-dom";
import classes from './Footer.module.css';
import logo from '../assets/icons/Logo_light.svg';
import Paragraph from "../UI/Paragraph";
import facebookIcon from '../assets/icons/facebook_icon.svg';
import twitterIcon from '../assets/icon/Instgram.svg';
import linkedInIcon from '../assets/icons/linkedIn_icon.svg';
import Media from "../UI/Media";
import Button from "../UI/Button";


const Footer = () => {
  const Navigate =useNavigate()
  return (
    <footer>
      <div className="container py_5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="mb-4 ">
            <img
              src={logo}
              style={{ width: "300px" }}
              alt="macber_logo"
              type="img"
            />
          </div>
          <div></div>
          {/* <Link to="/contact-us" className={classes.btn_contact}>
            Contact us
          </Link> */}
          <ul className="nav justify-content-center mt-2">
            <li className="nav-item">
              <Link
                // onClick={() => Navigate("/about")}
                className={`nav-link ${classes.nav_footer}`}
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // onClick={() => Navigate("/services")}
                className={`nav-link ${classes.nav_footer}`}
                to={"/services"}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${classes.nav_footer}`}
                to={"/our-work"}
              >
                Our work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${classes.nav_footer}`}
                to={"/insights"}
              >
                Insights
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${classes.nav_footer}`}
                to={"/joinMacber"}
              >
                Join Macber
              </Link>
            </li>
          </ul>
          <div className={`${classes.social_links} mt-2`}>
            <a
              href="https://www.facebook.com/Macberllc/"
              target="_blank"
              // tagType="link"
              className="p-0"
            >
              <img src={facebookIcon} alt="facebookIcon" type="img" />
            </a>
            {/* <Button
              href="https://instagram.com/macberegypt?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              tagType="link"
              className="p-0"
            >
              <img src={twitterIcon} alt="twitterIcon" type="img" />
            </Button> */}
            <a
              href="https://www.linkedin.com/company/macbercompany/"
              target="_blank"
              // tagType="link"
              className="p-0"
            >
              <img src={linkedInIcon} alt="linkedInIcon" type="img" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;