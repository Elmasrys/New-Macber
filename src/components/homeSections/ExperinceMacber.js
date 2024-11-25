import Paragraph from "../../UI/Paragraph";
import SectionTitle from "../../Layout/SectionTitle";
import MediaSrc from "../../assets/New/Bg_2.jpg";
const ExperinceMacber = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <SectionTitle sectTilte={"The Macber Advantage"} className="mb-3" />
            <div className="">
              <SectionTitle
                className="bold-400 darkBlue"
                sectTilte={"Top Engineering"}
              />
              <Paragraph className="desc-black my-2 w-80 t_just">
                Our team consists of highly skilled engineers and developers who
                are at the forefront of technological advancements. From
                designing cutting-edge software to creating intuitive user
                interfaces, we have the expertise to turn your vision into
                reality. With our meticulous attention to detail and commitment
                to quality, we deliver products that exceed expectations.
              </Paragraph>
              <SectionTitle
                className="bold-400 darkBlue"
                sectTilte={"Mature Process for Development"}
              />
              <Paragraph className="desc-black my-2 w-80 t_just">
                Whether you need to augment your existing workforce or assemble
                an entirely new development team, we have the resources and
                flexibility to meet your requirements. Our collaborative
                approach ensures seamless integration with your in-house team,
                allowing for efficient communication, faster time-to-market, and
                enhanced productivity. Together, we can achieve remarkable
                results.
              </Paragraph>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <img className="w-100 border-radus-32" alt="img" src={MediaSrc} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExperinceMacber;
