import React, { useState } from "react";
import Paragraph from "../../UI/Paragraph";
import Slider from "react-slick";
import OZ from '../../assets/New/CasestudyOzwork.jpg';
import TATWEER from '../../assets/New/Golden_platform.jpg';
import Button from "../../UI/Button";
import Media from "../../UI/Media";
import Right from '../../assets/icons/arrow_right.svg'
import left from '../../assets/icons/arrow_left.svg';
import SectionTitle from "../../Layout/SectionTitle";
import Clinc from "../../assets/New/ClincCas.jpg"
import { Link } from "react-router-dom";
import Btns_Mob from "../../UI/Btns_Mob";
import { useForm } from "../../context/ContextForm";
import CaseStydy_Mob from "./CaseStydy_Mob";
import Rinku from "../../assets/New/RinkuCase.jpg";
import Sensi from "../../assets/New/SeOurWork.jpg";
import Rider from "../../assets/New/RiderCaseStudt.jpg";
import Hydrofarms from "../../assets/New/haydrw.jpg";
import Sports from "../../assets/New/SportsSocietyCase.jpg";




const NextArrow = (props) => {
const {onClick} = props
return (
  <div className=" btn_next" onClick={onClick}>
    <Media type="img" className=" " src={Right} />
  </div>
);
}

const  PrevArorow = (props) =>  {
const {onClick} = props
return (
  <div className=" btn_back" onClick={onClick}>
    <Media type="img" className=" " src={left} />
  </div>
);
}
 const  CaseStudies = ()=> {
     const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArorow/>,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false

          }
        }
      ]
    };
 const ProductItem = useForm();
 function handleItem(e) {
   ProductItem.handleproduct(e.target.id);
 }
   return (
     <>
       <section className=" py-5">
         <div className="container">
           <SectionTitle sectTilte={" Case Studies"} />
           <div className="py-5  case_study_none">
             <Slider {...settings}>
               {/* <div className="position-relative">
                 <Link to="1">
                   <img alt="img" type="img" className="px-2 w-100" src={OZ} />
                   <Paragraph className="text_logo">
                     Oz
                     <br />
                     platform
                   </Paragraph>
                   <Paragraph className="caseStudy_slider_p">
                     OZ Innovations aims to disrupt conventional workplace
                     concepts and enable the future of work in the most
                     efficient way.
                   </Paragraph>
                 </Link>
               </div> */}
               <div className="position-relative">
                 <Link to="2">
                   <img
                     alt="img"
                     type="img"
                     className="px-2 border-radus-32 w-100"
                     src={TATWEER}
                   />
                   <Paragraph className="text_logo">
                     Golden
                     <br />
                     Deal
                   </Paragraph>

                   <Paragraph className="caseStudy_slider_p  ">
                     The Golden Deal was established for e-commerce, and it is
                     an electronic platform that enables the user to sell his
                     products or open
                   </Paragraph>
                 </Link>
               </div>
               <div className="position-relative">
                 <Link to="3">
                   <img
                     alt="img"
                     type="img"
                     className="px-2 border-radus-32 w-100"
                     src={Clinc}
                   />

                   <Paragraph className="text_logo">
                     The Legal
                     <br />
                     Clinic
                   </Paragraph>

                   <Paragraph className="caseStudy_slider_p ">
                     Is The First Law Firm Specialized In Serving And Supporting
                     Startups And Empowering Entrepreneurship In MENA Region.
                   </Paragraph>
                 </Link>
               </div>
               <div className="position-relative">
                 <Link to="4">
                   <img
                     alt="img"
                     type="img"
                     className="px-2 border-radus-32 w-100"
                     src={Rinku}
                   />

                   <Paragraph className="text_logo">
                     Rinku
                     <br />
                     System
                   </Paragraph>

                   <Paragraph className="caseStudy_slider_p ">

  
                   </Paragraph>
                 </Link>
               </div>
               <div className="position-relative">
                 <Link to="5">
                   <img
                     alt="img"
                     type="img"
                     className="px-2 border-radus-32 w-100"
                     src={Sensi}
                   />

                   <Paragraph className="text_logo">
                     Sensi
                     <br />
                     System
                   </Paragraph>

                   <Paragraph className="caseStudy_slider_p ">

                   </Paragraph>
                 </Link>
               </div>
               <div className="position-relative">
                 <Link to="6">
                   <img
                     alt="img"
                     type="img"
                     className="px-2 border-radus-32 w-100"
                     src={Rider}
                   />

                   <Paragraph className="text_logo">
                     Riders
                     <br />
                     Platform
                   </Paragraph>

                   <Paragraph className="caseStudy_slider_p ">
                    
                   </Paragraph>
                 </Link>
               </div>
               <div className="position-relative">
                 <Link to="7">
                   <img
                     alt="img"
                     type="img"
                     className="px-2 border-radus-32 w-100"
                     src={Hydrofarms}
                   />

                   <Paragraph className="text_logo">
                   Hydrofarms
                   </Paragraph>

                   <Paragraph className="caseStudy_slider_p ">
                  
                   </Paragraph>
                 </Link>
               </div>
                <div className="position-relative">
                 <Link to="8">
                   <img
                     alt="img"
                     type="img"
                     className="px-2 border-radus-32 w-100"
                     src={Sports}
                   />

                   <Paragraph className="text_logo">
                      Sports Society
                   </Paragraph>

                   <Paragraph className="caseStudy_slider_p ">
                    
                   </Paragraph>
                 </Link>
               </div>
             </Slider>
           </div>
           <CaseStydy_Mob />

           <div>
             <SectionTitle sectTilte={"Recent Projects"} />
           </div>
           <div className=" d-flex   flex-md-row  flex-column justify-content-around text-center  pt-4  px-5 btns_mob_none">
             <Button
               onclick={handleItem}
               className="btn-white border-blue btn-scale px_btn "
               tagType="link"
               id="All"
             >
               All Work
             </Button>
             <Button
               onclick={handleItem}
               className="btn-white border-blue btn-scale px_btn "
               tagType="link"
               id={"Product"}
             >
               Product
             </Button>

             <Button
               onclick={handleItem}
               className="btn-white border-blue btn-scale px_btn "
               tagType="link"
               id="All"
             >
               Design
             </Button>
             <Button
               onclick={handleItem}
               className="btn-white border-blue btn-scale px_btn "
               tagType="link"
               id="Commerce"
             >
               Commerce
             </Button>
           </div>
           <Btns_Mob />
         </div>
       </section>
     </>
   );
 }
 
 export default  CaseStudies