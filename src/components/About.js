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
            "We Are Builders, Strategists, and Impact-Driven Technologists"
          </Paragraph>
        </div>
      </section>
      <div className="container py-5">
        <div className="pt-5">
          <Paragraph className=" title-blue ">Company Overview</Paragraph>
          <Counter
            flex_cols={"col-3 pb-2"}
            flex_box={"flex_box"}
            border_type={"border_right"}
            padding={"py-3"}
            classNameForCounter={"desc-blue small-blue"}
            classNameForText={"title-black small-black pt-3"}
          />
          <MissionVision />
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
