import SectionHeader from "../Layout/SectionHeader";
import Paragraph from "../UI/Paragraph";
import bg from "../assets/New/about_bg.jpg";
import Supporters from "./Supporters";
import OurStory from "./aboutSection/OurStory";
import Team from "./aboutSection/Team";
import TeamTestimonials from "./aboutSection/TeamTestimonials";
import TeamGallery from "./aboutSection/TeamGallery";
import MainHeaderWrapper from "../Layout/MainHeaderWrapper";
import OurOffices from "../components/aboutSection/OurOffices";
import MissionVision from "./aboutSection/MissionVision";
import Counter from "../UI/Counter";
import { useForm } from "../context/ContextForm";
import { useState } from "react";
const About = () => {
  const ProductForm = useForm();
    const [input, setInput] = useState(false);
 function handleInput (e){
  ProductForm.handleForm(e.target.id);  
    setInput(!input)

  }


  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={bg} height="38rem" animate={true}>
          <SectionHeader
            bg={bg}
            titleName="w-70"
            title={"Global Tech. Regional Expertise. Real Impact."}
            classNameOne={"px_btn"}
            callToActionOne={"contact us"}
            to={'/contact-us'}
          />
        </MainHeaderWrapper>
      </div>
      <section className="py_7 backGround_trans">
        <div className="container py-xl-5 text-center  ">
          <Paragraph className="text-quote font-lg">
            “We Are Thinkers , Designers & Creative Technologists”
          </Paragraph>
        </div>
      </section>
      <MissionVision />
      <div className="container py-5">
        <div className="pt-5">
          <Paragraph className=" title-blue ">Company Overview</Paragraph>
          <div className="row justify-content-center">
            <div className="col-12 pt-5">
              <Counter
                flex_cols={"col-3 pb-2"}
                flex_box={"flex_box"}
                border_type={"border_right"}
                padding={"py-3"}
                classNameForCounter={"desc-blue small-blue"}
                classNameForText={"title-black small-black pt-3"}
              />

              <br />
            </div>
            <div className="col-xl-8 ">
              <Paragraph className="text-black-light pt-xl-5 pt-2  t_just">
                <Paragraph className="title-blue">Global Technology Partner for Digital Transformation</Paragraph>
                Macber is a UK-headquartered technology company with deep operational roots in Egypt, Saudi Arabia, and the UAE. We partner with ambitious organizations to deliver high-impact digital solutions—combining engineering excellence, strategic thinking, and regionally aligned execution.
                We build long-term partnerships that enable growth, efficiency, and innovation across industries. From digital product development and AI automation to large-scale event technology, Macber operates at the intersection of creativity, technology, and impact.
              </Paragraph>
            </div>
          </div>
        </div>
        <Supporters padding={"pt-5"} hr={false} />
      </div>
      <TeamTestimonials />
      <OurStory padding={"py_5"} />
      <Team padding={"py_5"} />
      <TeamGallery />
      <OurOffices />
   
                
    </>
  );
};
export default About;
