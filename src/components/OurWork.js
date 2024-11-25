import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import bg from '../assets/New/our_work_main.jpg';
import SectionHeader from '../Layout/SectionHeader';
import CaseStudies from './ourWork/CaseStudies';
import "./ourWork/ourwork.css";
import WorksProject from './ourWork/WorksProject';
import WhereStart from './serviceSection/WhereStart';


const OurWork = ()=>{
    return (
      <>
        <div className="overflow">
          <MainHeaderWrapper bg={bg} height="37rem" animate={true}>
            <SectionHeader
              bg={bg}
              titleName=" title_home"
              title={`Where we Made  a Difference `}
              BreadCrumb={true}
              classNameOne={"px_btn"}
            />
          </MainHeaderWrapper>
        </div>
        <div className="container">
          <CaseStudies />
          <WorksProject />
        </div>
        <WhereStart
          className_sec={" mx-auto"}
          sectionTitle={"Got a project in mind?Tell us about it."}
          link={"Contact us"}
          to="/about"
        />
      </>
    );
}
export default OurWork;