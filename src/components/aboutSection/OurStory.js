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
          <div className="col-8">
            <div className=" row g-0 ">
              <div className="col-6">
                <CardValue
                  alt={"macber-Innovation"}
                  HeadOne={`Innovation`}
                  DescOne={` We are dedicated to pushing the boundaries of
              technology, creating software solutions that are not just
              functional but truly innovative, unique, and valuable.`}
                  srcOne={Innovation}
                />
              </div>
              <div className="col-6">
                <CardValue
                  alt={"macber-Quality"}
                  HeadOne={`Quality`}
                  DescOne={`
              We value delivering software solutions characterized by exceptional quality, reliability, and durability.`}
                  srcOne={Quality}
                />
              </div>
            </div>
            <div className=" row g-0">
              <div className="col-6">
                <CardValue
                  alt={"macber-Experience"}
                  HeadOne={`Customer Experience`}
                  DescOne={`
                We believe that building strong relationships and delivering
                exceptional value to our clients is essential to remarkable
                customer experience.`}
                  srcOne={Experience}
                />
              </div>
              <div className="col-6">
                <CardValue
                  alt={"macber-Collaboration"}
                  HeadOne={`Collaboration`}
                  DescOne={`
                We work intimately with our clients, partners, and stakeholders to
                develop customized solutions that meet their unique needs.`}
                  srcOne={Collaboration}
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <CardValue
              alt={"macber-Creativity"}
              HeadOne={`  Creativity`}
              DescOne={` We value creativity and encourages our team to think outside the
                box. We are fueled with imaginative solutions that enhance the
                human experience.`}
              srcOne={Creativity}
            />
          </div>
          <div className="col-8">
            <CardValue
              alt={"macber-Flexibility"}
              HeadOne={`Flexibility`}
              DescOne={`  We are committed to being flexible and adaptable to ensure we
                can deliver solutions that are tailored to clients' needs.`}
              srcOne={Flexibility}
            />
          </div>
          <div className="col-4">
            <CardValue
              classNameTitle={"small-title"}
              classNameDesc={"small-desc"}
              alt={"macber-Integrity"}
              HeadOne={`Integrity`}
              DescOne={`  We operate with the highest standards of ethics and integrity.
                We believe in honesty, transparency, and fairness in all their
                business dealing`}
              srcOne={Integrity}
            />
            <CardValue
              classNameTitle={"small-title"}
              classNameDesc={"small-desc"}
              alt={"macber-Growth"}
              HeadOne={`Growth`}
              DescOne={`  We invest in the professional development of our teams and
                continuously evaluate and improve their processes to ensure they
                are always delivering the best possible value to clients.`}
              srcOne={Growth}
            />
          </div>
        </div>
      </div>

    <MacberValueMob/>
    </>
  );
};
export default OurStory;
