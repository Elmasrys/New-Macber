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
            title={"The Leading Product Innovation Agency in MENA"}
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
      <div className="container py-5">
        <div className="pt-5">
          <Paragraph className=" title-blue ">Company Overview</Paragraph>
          <div className="row">
            <div className="col-xl-4  pt-5">
              <Counter
                flex_cols={"col-7 pb-2"}
                flex_box={"flex_box"}
                border_type={"border_bottom"}
                padding={"py-3"}
                classNameForCounter={"desc-blue small-blue"}
                classNameForText={"title-black small-black pt-3"}
              />

              <br />
            </div>
            <div className="col-xl-8 ">
              <Paragraph className="text-black-light pt-xl-5 pt-2  t_just">
                In 2014, our founder embarked on an ambitious journey,
                challenging the marketing scene with innovative and futuristic
                technologies, where Macber emerged as a leader with distinctive
                products that enhance the customer experience such as events
                registration systems and integrated Augmented and Mixed Reality
                products.
              </Paragraph>
              <Paragraph className="text-black-light pt-2  t_just">
                From those early days, the company has transformed into a design
                and product innovation powerhouse, leaving an indelible mark on
                the industry with its creative and customer centric DNA. Macber
                has blossomed into an internationally recognized force,
                extending its influence across the MENA region. From pioneering
                innovative marketing solutions to becoming a trusted global
                partner, Macber has thrived on innovation and creativity,
                boasting a track record of over 200 satisfied customers and 1200
                successful projects.
              </Paragraph>
              <Paragraph className="text-black-light pt-2  t_just">
                Headquartered in the UK, Macber strategically operates in the
                MENA region, with a stronghold on the market in Egypt, and
                notable presence in KSA and UAE. This global positioning allows
                us to deliver world-class product development services, catering
                to the dynamic needs of businesses in the Middle East. Fuelling
                Macber's success is an expert team of passionate software
                developers, designers, and project managers. Their collaborative
                approach involves working closely with clients to understand
                unique needs and objectives, crafting tailored solutions that
                surpass expectations. At the core of Macber's ethos is an
                unwavering commitment to quality, exceptional customer service,
                and staying at the forefront of technology trends. Whether it is
                custom product development, mobile app development, or web
                development services, Macber stands ready to empower businesses
                to achieve their goals with the same ambition that
                fuelled its inception.
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
