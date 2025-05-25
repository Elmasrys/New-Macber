import SectionTitle from "../../Layout/SectionTitle";
import Innovation from "../../assets/New/Innovation.jpg";
import Quality from "../../assets/New/Quality.jpg";
import Experience from "../../assets/New/Experience.jpg";
import Creativity from "../../assets/New/Creativity.jpg";
import Collaboration from "../../assets/New/Collaboration.jpg";
import Integrity from "../../assets/New/Integrity.jpg";
import Growth from "../../assets/New/Growth.jpg";
import Flexibility from "../../assets/New/Flexibility.jpg";
import CardValue from "../../UI/CardValue";
import MacberValueMob from "../MobDesign/MacberValueMob";

const OurStory = (props) => {
  return (
    <>
      <div className="container pt-5 ">
        <SectionTitle sectTilte={" Macber’s values"} padding={"pb-4"} />
      </div>
      <div className=" Value-macber-desktop">
        <div className="row g-0">
          <div className="col-12">
            <div className=" row g-0 ">
              <div className="col-6">
                <CardValue
                  alt={"macber-Context-Is-Critical"}
                  HeadOne={`Context Is Critical`}
                  DescOne={`Our presence across MENA means we understand the nuances regulatory, cultural, operational of scaling digital products in the region.`}
                  srcOne={Innovation}
                />
              </div>
              <div className="col-6">
                <CardValue
                  alt={"macber-Technology-Is-a-Growth-Lever"}
                  HeadOne={`Technology Is a Growth Lever`}
                  DescOne={`We help businesses use technology not as a cost center, but as a driver of profitability, scale, and strategic advantage.`}
                  srcOne={Quality}
                />
              </div>
            </div>
            <div className=" row g-0">
              <div className="col-6">
                <CardValue
                  alt={"macber-people-come-first"}
                  HeadOne={`People Come First`}
                  DescOne={`
               Whether it’s our clients, teams, or end-users we build human-centric experiences, not just systems.`}
                  srcOne={Experience}
                />
              </div>
              <div className="col-6">
                <CardValue
                  alt={"macber-Speed-Matters"}
                  HeadOne={`Collaboration`}
                  DescOne={`In a competitive digital world, execution speed is a differentiator. We structure our teams and workflows to move fast, without compromising quality.`}
                  srcOne={Collaboration}
                />
              </div>
            </div>
          </div>
          {/*<div className="col-4">*/}
          {/*  <CardValue*/}
          {/*    alt={"macber-Creativity"}*/}
          {/*    HeadOne={`  Creativity`}*/}
          {/*    DescOne={` We value creativity and encourages our team to think outside the*/}
          {/*      box. We are fueled with imaginative solutions that enhance the*/}
          {/*      human experience.`}*/}
          {/*    srcOne={Creativity}*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div className="col-8">*/}
          {/*  <CardValue*/}
          {/*    alt={"macber-Flexibility"}*/}
          {/*    HeadOne={`Flexibility`}*/}
          {/*    DescOne={`  We are committed to being flexible and adaptable to ensure we*/}
          {/*      can deliver solutions that are tailored to clients' needs.`}*/}
          {/*    srcOne={Flexibility}*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div className="col-4">*/}
          {/*  <CardValue*/}
          {/*    classNameTitle={"small-title"}*/}
          {/*    classNameDesc={"small-desc"}*/}
          {/*    alt={"macber-Integrity"}*/}
          {/*    HeadOne={`Integrity`}*/}
          {/*    DescOne={`  We operate with the highest standards of ethics and integrity.*/}
          {/*      We believe in honesty, transparency, and fairness in all their*/}
          {/*      business dealing`}*/}
          {/*    srcOne={Integrity}*/}
          {/*  />*/}
          {/*  <CardValue*/}
          {/*    classNameTitle={"small-title"}*/}
          {/*    classNameDesc={"small-desc"}*/}
          {/*    alt={"macber-Growth"}*/}
          {/*    HeadOne={`Growth`}*/}
          {/*    DescOne={`  We invest in the professional development of our teams and*/}
          {/*      continuously evaluate and improve their processes to ensure they*/}
          {/*      are always delivering the best possible value to clients.`}*/}
          {/*    srcOne={Growth}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>

    <MacberValueMob/>
    </>
  );
};
export default OurStory;
