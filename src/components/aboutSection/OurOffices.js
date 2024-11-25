import BackGroundLight from "../../Layout/BackGroundLight";
import SectionTitle from "../../Layout/SectionTitle";
import Card from "../../UI/Card";
import Egypt from "../../assets/New/location-egypt.jpg";
import London from "../../assets/New/London.jpg";
import Dubai from "../../assets/New/dubai.jpg";
import Rayiad from "../../assets/New/location-rayiad.jpg";
const OurOffices = () => {
  return (
    <>
      <BackGroundLight className="backGround_light py-5">
        <div className="container">
          <SectionTitle sectTilte={" Located Around The World"} />
          <div className="row  py-5 g-3">
            <div className="col-xl-3 col-md-6 col-sm-6 py-2">
              <Card
                className={"p-0 blog_card"}
                image={London}
                imgWidth="100%"
                imgHeight="100%"
                title={"UK- Headquarter"}
                titleStyle={"lightBlue3 ps-2 bold-500 font-sm"}
                descOffice={
                  "Abacus House,14 - 18 Forest Road,Loughton, England, IG10 1DX"
                }
                descStyleOffice={"desc-black mb-0 fs-11"}
                linkColor={"black ps-2 "}
              />
            </div>
            <div className="col-xl-3 col-md-6 col-sm-6 py-2">
              <Card
                className={"p-0 blog_card"}
                image={Egypt}
                imgWidth="100%"
                imgHeight="100%"
                title={"Egypt-Delivery Office"}
                titleStyle={" lightBlue3 ps-2 bold-500 font-sm"}
                descOffice={
                  "2 Street 23, Off Talaat Harb Axis,New Cairo, Egypt"
                }
                descStyleOffice={"desc-black mb-0 fs-11"}
                linkColor={"black ps-2"}
              />
            </div>
            <div className="col-xl-3 col-md-6 col-sm-6 py-2">
              <Card
                className={"p-0 blog_card"}
                image={Dubai}
                imgWidth="100%"
                imgHeight="100%"
                title={"UAE- Sales Office"}
                titleStyle={"lightBlue3 ps-2 bold-500 font-sm"}
                descOffice={
                  "The burlington towers – office 801 – 8th floor business bay – dubai – uae"
                }
                descStyleOffice={"desc-black mb-0 fs-11"}
                linkColor={"black ps-2"}
              />
            </div>
            <div className="col-xl-3 col-md-6 col-sm-6 py-2">
              <Card
                className={"p-0 blog_card"}
                image={Rayiad}
                imgWidth="100%"
                imgHeight="100%"
                title={"KSA- Sales Office"}
                titleStyle={" bold-500 ps-2 font-sm lightBlue3"}
                descOffice={
                  "2329 makkah al mukarramah branch road, al rabwah, riyadh saudi arabia"
                }
                descStyleOffice={"desc-black mb-0 fs-11"}
                linkColor={"black ps-2"}
              />
            </div>
          </div>
        </div>
      </BackGroundLight>
    </>
  );
};
export default OurOffices;
