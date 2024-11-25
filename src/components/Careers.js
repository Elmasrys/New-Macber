import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import SectionHeader from '../Layout/SectionHeader';
import bg from '../assets/New/Join_macber.jpg';
import CareerSection from './Career/CareerSection';
import CareerOpening from './Career/CareerOpening';
import CareerHire from './Career/CareerHire';
import CareerEventGallery from './Career/CareerEventGallery';
import Supporters from './Supporters';

const Careers = ()=>{
    return (
      <>
        <div className="overflow">
          <MainHeaderWrapper bg={bg} height="38rem" animate={true}>
            <SectionHeader
              titleName=" title_home"
              title={"Shape the Future With Us "}
              BreadCrumb={true}
              breadCrumbtitle={"Careers"}
              classNameCall2=""
              // callToActionOne="join macber"
              to="/"
            />
          </MainHeaderWrapper>
        </div>
        <CareerSection />
        <CareerOpening />
        <CareerEventGallery />
        {/* <CareerHire /> */}
        <Supporters padding={"py-5"} hr={true} />
      </>
    );
}
export default Careers;