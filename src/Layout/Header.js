import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logoLight from '../assets/icons/Logo_light.svg';
import logoDark from '../assets/icons/Logo_blue.svg';
import Logo from '../UI/Logo';
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "../UI/MenuToggle";
import  MenuNav  from '../UI/MenuNav';
import classes from './Header.module.css';

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
                { transform: "translateY(-100%)"},{ duration: 0.4 }
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
    }, [isOpen,animate]);
  
    return scope;
}
const Header = ()=>{
    const [isStrickyFixed, setIsStrickyFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const reset = () =>{ setIsOpen(!isOpen) };

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
    
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg justify-content-lg-center justify-content-between ${
            classes.navbar
          } 
          ${
            isStrickyFixed
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
                >
                  <span>Services</span>
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
                  to={"/our-work"}
                >
                  <span>Our work</span>
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
                >
                  <span>Join Macber</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}
export default Header;