import MainHeaderWrapper from "../../Layout/MainHeaderWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import bg from "../../assets/New/Phonepaper.jpg";
import WhereStart from "./WhereStart";
import ServiceDesigSlider from "./ServiceDesigSlider";
import "../serviceSection/Experience.css";
import ServDesSecOne from "./ServDesSecOne";
import ServDesSecTwo from "./ServDesSecTwo";
import ServDesSecThird from "./ServDesSecThird";
import ServDesGallery from "./ServDesGallery";
import ServDesCards from "./ServDesCards";
const ServiceDesign = (props) => {
  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={bg} height="38rem" animate={true}>
          <SectionHeader
            titleName={"mb-5"}
            title={"UX / UI Design"}
            desc={
              "Boost your brand awareness and customer loyalties, increase product revenues and conversion rates with the implementation of user experience and user interface design."
            }
            BreadCrumb={false}
          />
        </MainHeaderWrapper>
      </div>
      <div className="container py-5">
        <ServDesSecOne />
        <ServDesSecTwo />
        <ServDesSecThird />
        <ServDesGallery />
        <ServiceDesigSlider />
        <ServDesCards/>
      </div>
      <section>
        <WhereStart
          sectionTitle={"Got a project in mind? Tell us about it. "}
          // sectionTitleBr={" Tell us about it."}
          link={"Contact us"}
        />
      </section>
    </>
  );
};

export default ServiceDesign;
