import Card from '../UI/Card';
import search from "../assets/icons/Searh_new.svg";
import setting from "../assets/icons/Setting_new.svg";
import team from "../assets/icons/Ded_new.svg";
import ui from '../assets/icons/UX_NEW.svg';
import web from '../assets/icons/Web_Dev_new.svg';
import mobile from '../assets/icons/Mob_new.svg';
import webcard from '../assets/icons/web development.svg';
import sass from '../assets/icons/Sass_new.svg';
import vr from "../assets/icons/Var_new.svg";
const CardSection = ()=>{
    return (
      <>
        <div className="container py-5">
          <div className="py-2">
            <div className="row ">
              <div className="col-xl-4 col-lg-6 col-md-6 col sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp"
                  image={search}
                  title={"Product Discovery"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={`Our project discovery service provides you with comprehensive analysis and validation of your concept before crafting a tangible product; increasing your success rate and reducing development expenses.
`}
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // to={`5`}
                  //  <Navigate to="/dashboard" replace={true} />
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp animate__delay-1s"
                  image={setting}
                  title={"Product Development"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={
                    "Full-cycle software product development services from market research and business analysis to design, development, and launch."
                  }
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp animate__delay-2s"
                  image={team}
                  title={"Dedicated Development Team"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={`Hire a dedicated development team that is scalable and fits your needs.
No pressure of a backlog without hiring, training, and maintaining long-term salaries. Hire a dedicated software development team of highly selected engineers.
`}
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp"
                  image={ui}
                  title={"UX/UI Design"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={
                    "We help with web and mobile apps, marketing websites, landing pages and two-sided platforms."
                  }
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp animate__delay-1s"
                  image={web}
                  title={"Web Design"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={`Empower your business with our web design services, swiftly crafting and launching customised user experiences that cater to your unique needs.
`}
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp animate__delay-2s"
                  image={sass}
                  title={"Saas Development"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={`Unleash the power of cloud-based possibilities with our SaaS development, crafting solutions that seamlessly integrate innovation and practicality for your business success.

`}
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp"
                  image={mobile}
                  title={"Mobile Development"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={`Our mobile app development team takes care of crafting and developing tailored mobile application, guaranteeing that the end product not only meets but surpasses your expectations, delivering a seamless and engaging user experience.
`}
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp animate__delay-1s"
                  image={webcard}
                  title={"Web Development"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={`Our expert web development team crafts high-performing, user-friendly, and secure web products that deliver unmatched customer experiences, ensuring faster business growth. Stay ahead of the competition with our proactive custom web development services.
`}
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-2">
                <Card
                  className="card-service p-5 wow animate__animated animate__fadeInUp animate__delay-1s"
                  image={vr}
                  title={"VR & AR Development"}
                  titleStyle={"lightBlue3 bold-700 font-sm"}
                  desc={`Step into the future with our VR and AR development services, creating immersive and interactive experiences that redefine reality.`}
                  descStyle={"opacity-50 t_just"}
                  linkStyle={"linkHover"}
                  // link={"Learn more"}
                  // arrowColor={"#000"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default CardSection;