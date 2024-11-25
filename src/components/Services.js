import SectionHeader from '../Layout/SectionHeader';
import CardSection from '../UI/CardSection';
import bg from '../assets/New/service-bg.jpg';
import WhereStart from './serviceSection/WhereStart';
import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
const Services = ()=>{
    return (
      <>
        <div className="overflow">
          <MainHeaderWrapper bg={bg} height="38rem" animate={true}>
            <SectionHeader
              titleName="w-80 title_home"
              title={"Unlocking Digital Possibilities"}
              callToActionOne={"Talk to us"}
              classNameOne={"px_btn"}
              breadCrumbtitle={"Services"}
              to="/contact-us"
            />
          </MainHeaderWrapper>
        </div>
        <CardSection />
        <WhereStart
          sectionTitle={"Don't know where to start?"}
          sectionDesc={`Use our Business Impact Solutions as a starting off point to drive the conversationtowards fulfilling your needs.`}
          link={"Contact us"}
          to="/contact-us"
        />
      </>
    );
}
export default Services;