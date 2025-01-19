import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logoLight from '../assets/icons/Logo_light.svg';
import logoDark from '../assets/icons/Logo_blue.svg';
import Logo from '../UI/Logo';
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "../UI/MenuToggle";
import MenuNav from '../UI/MenuNav';
import classes from './Header.module.css';
import SignArrow from '../UI/Svg/SignArrow';
// import arr from '../assets/icon/prime_sign-in.svg';

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
        [
          "div",
          { transform: "translateY(0%)" },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 }
        ],
        // [
        //   "ul",
        //   { transform: "translateX(0%)" },
        //   { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
        // ],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(0.05), at: "-0.1" }
        ]
      ]
      : [
        [
          "div",
          { transform: "translateY(-100%)" }, { duration: 0.4 }
        ],
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(0.05, { from: "last" }), at: "<" }
        ],
        // [
        //     "ul", 
        //     { transform: "translateY(-100%)"}, { at: "-0.1" }
        // ]
      ];
    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen, animate]);

  return scope;
}
const Header = () => {
  const [isStrickyFixed, setIsStrickyFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActiving , setIsActiving] = useState(false)
  const scope = useMenuAnimation(isOpen);
  const reset = () => { setIsOpen(!isOpen) };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const headerScrollPos = 130;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      //   const shouldFixHeader = currentScrollPos > headerScrollPos && currentScrollPos < prevScrollPos;
      const shouldFixHeader = window.pageYOffset > headerScrollPos;

      setIsStrickyFixed(shouldFixHeader);
      //   prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {

    isOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
    // Clean up the event listener on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);
  const [isActive, setIsActive] = useState(true);
  const getFillColor = () => {
    if (isActive) {
      return isStrickyFixed ? "#2C60F2" : "#69DEEF";
    } else {
      return isStrickyFixed ? "#000000" : "#F4F7FE";
    }
  };



  return (
    <>
      <nav
        className={`navbar navbar-expand-lg justify-content-lg-center justify-content-between ${classes.navbar
          } 
          ${isStrickyFixed
            ? `${classes.stickey_header} ${classes.stickey_fixed}`
            : ""
          }`}
      >
        <NavLink className="navbar-brand d-block d-lg-none m-0" to={"/"}>
          <img
            src={isStrickyFixed ? logoDark : logoLight}
            alt="macber_logo"
            loading="lazy"
            width="100%"
            style={{ width: "240px" }}
          />
        </NavLink >
        <div ref={scope} className={`navbar-toggler p-0`}>
          <MenuToggle
            toggle={() => {
              setIsOpen(!isOpen);
            }}
            stroke={isStrickyFixed}
          />
          <MenuNav onClick={reset} />
        </div>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="nav">
            <li className="nav-item px-xl-4 px-3">
              <NavLink
                className={`nav-link px-0 ${classes.nav_link}`}
                style={({ isActive }) => ({
                  color: isActive
                    ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : `${isStrickyFixed ? "#000000" : "#F4F7FE"}`,
                  borderBottom: isActive
                    ? `2px solid ${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : "none",
                  fontWeight: isActive ? 800 : 400,
                })}
                to={"/"}
                end
                onClick={(e)=>setIsActiving(!isActiving)}

              >
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item px-xl-4 px-3">
              <NavLink
                className={`nav-link px-0 ${classes.nav_link}`}
                style={({ isActive }) => ({
                  color: isActive
                    ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : `${isStrickyFixed ? "#000000" : "#F4F7FE"}`,
                  borderBottom: isActive
                    ? `2px solid ${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : "none",
                  fontWeight: isActive ? 800 : 400,
                })}
                to={"/about"}
                onClick={(e)=>setIsActiving(!isActiving)}

              >
                <span>About</span>
              </NavLink>
            </li>
            <li className="nav-item px-xl-4 px-3">
              <NavLink
                className={`nav-link px-0 ${classes.nav_link}`}
                style={({ isActive }) => ({
                  color: isActive
                    ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : `${isStrickyFixed ? "#000000" : "#F4F7FE"}`,
                  borderBottom: isActive
                    ? `2px solid ${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : "none",
                  fontWeight: isActive ? 800 : 400,
                })}
                to={"/services"}
                onClick={(e)=>setIsActiving(!isActiving)}

              >
                <span>Services</span>
              </NavLink>
            </li>
            <li className="nav-item px-xl-4 px-3">
              <NavLink
                className={`nav-link px-0 ${classes.nav_link}`}
                style={({ isActive }) => ({
                  color: isActive
                    ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : `${isStrickyFixed ? "#000000" : "#F4F7FE"}`,
                  borderBottom: isActive
                    ? `2px solid ${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : "none",
                  fontWeight: isActive ? 800 : 400,
                })}
                to={"/our-work"}
                onClick={(e)=>setIsActiving(!isActiving)}

              >
                <span>Our work</span>
              </NavLink>
            </li>
            <li className="nav-item px-xl-4 px-3">
              <NavLink className="navbar-brand d-block-md" to={"/"}>
                <img
                  src={isStrickyFixed ? logoDark : logoLight}
                  alt="macber_logo"
                  loading="lazy"
                  width="100%"
                  style={{ width: "300px" }}
                onClick={(e)=>setIsActiving(!isActiving)}

                />
              </NavLink>
            </li>

            <li className="nav-item px-xl-4 px-3">
              <NavLink
                className={`nav-link px-0 ${classes.nav_link}`}
                style={({ isActive }) => ({
                  color: isActive
                    ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : `${isStrickyFixed ? "#000000" : "#F4F7FE"}`,
                  borderBottom: isActive
                    ? `2px solid ${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : "none",
                  fontWeight: isActive ? 800 : 400,
                })}
                to={"/insights"}
                onClick={(e)=>setIsActiving(!isActiving)}

              >
                <span>Insights</span>
              </NavLink>
            </li>
            <li className="nav-item px-xl-4 px-3">
              <NavLink
                className={`nav-link px-0 ${classes.nav_link}`}
                style={({ isActive }) => ({
                  color: isActive
                    ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : `${isStrickyFixed ? "#000000" : "#F4F7FE"}`,
                  borderBottom: isActive
                    ? `2px solid ${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : "none",
                  fontWeight: isActive ? 800 : 400,
                })}
                to={"/joinMacber"}
                onClick={(e)=>setIsActiving(!isActiving)}

              >
                <span>Join Macber</span>
              </NavLink>
            </li>
            <li className="nav-item px-xl-4 px-3">
              <NavLink
                className={`nav-link  lightWhite text-decoration-none btn-outline-white btn ${classes.nav_link}`}
                style={({ isActive }) => ({
                  color: isActive
                    ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`
                    : `${isStrickyFixed ? "#000000" : "#F4F7FE"}`,

                  fontWeight: isActive ? 800 : 400,
                })}
                to={"/signUp"}
                onClick={(e)=>setIsActiving(!isActiving)}
              >
                Sign up

                {/* <SignArrow/> */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20.7502H15C14.8011 20.7502 14.6103 20.6712 14.4697 20.5305C14.329 20.3899 14.25 20.1991 14.25 20.0002C14.25 19.8013 14.329 19.6105 14.4697 19.4699C14.6103 19.3292 14.8011 19.2502 15 19.2502H18C18.2969 19.276 18.5924 19.1866 18.8251 19.0004C19.0579 18.8142 19.21 18.5456 19.25 18.2502V5.78022C19.21 5.48487 19.0579 5.21624 18.8251 5.03005C18.5924 4.84386 18.2969 4.7544 18 4.78022H15C14.8011 4.78022 14.6103 4.7012 14.4697 4.56055C14.329 4.41989 14.25 4.22913 14.25 4.03022C14.25 3.83131 14.329 3.64054 14.4697 3.49989C14.6103 3.35923 14.8011 3.28022 15 3.28022H18C18.3468 3.26547 18.693 3.31924 19.019 3.43845C19.3449 3.55767 19.6442 3.73998 19.8996 3.97497C20.155 4.20996 20.3616 4.49301 20.5075 4.80792C20.6535 5.12284 20.7359 5.46343 20.75 5.81022V18.2202C20.7359 18.567 20.6535 18.9076 20.5075 19.2225C20.3616 19.5374 20.155 19.8205 19.8996 20.0555C19.6442 20.2904 19.3449 20.4728 19.019 20.592C18.693 20.7112 18.3468 20.765 18 20.7502Z"
                   fill={ isActiving ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`:`${isStrickyFixed ? "#000000" : "#F4F7FE"}`} />
                  <path d="M10.9998 16.7498C10.9013 16.7503 10.8036 16.7311 10.7126 16.6933C10.6216 16.6555 10.5391 16.6 10.4698 16.5298C10.3294 16.3892 10.2505 16.1986 10.2505 15.9998C10.2505 15.8011 10.3294 15.6105 10.4698 15.4698L13.9398 11.9998L10.4698 8.52985C10.3373 8.38767 10.2652 8.19963 10.2687 8.00532C10.2721 7.81102 10.3508 7.62564 10.4882 7.48822C10.6256 7.35081 10.811 7.2721 11.0053 7.26867C11.1996 7.26524 11.3877 7.33737 11.5298 7.46985L15.5298 11.4698C15.6703 11.6105 15.7492 11.8011 15.7492 11.9998C15.7492 12.1986 15.6703 12.3892 15.5298 12.5298L11.5298 16.5298C11.4606 16.6 11.378 16.6555 11.287 16.6933C11.196 16.7311 11.0984 16.7503 10.9998 16.7498Z" 
                  fill={ isActiving ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`:`${isStrickyFixed ? "#000000" : "#F4F7FE"}`} />
                  <path d="M15 12.75H4C3.80109 12.75 3.61032 12.671 3.46967 12.5303C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697C3.61032 11.329 3.80109 11.25 4 11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75Z"
                   fill={ isActiving ? `${isStrickyFixed ? "#2C60F2" : "#69DEEF"}`:`${isStrickyFixed ? "#000000" : "#F4F7FE"}`} />
                </svg>

                {/* <img src={arr}/> */}
                {/* <span  className="lightWhite text-decoration-none btn-outline-white btn">Our work</span> */}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;