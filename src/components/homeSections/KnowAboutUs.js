import Paragraph from "../../UI/Paragraph";
import SectionTitle from "../../Layout/SectionTitle";
import MediaSrc from "../../assets/New/BG_home.jpg";
const KnowAbotUS = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center  flex-lg-row flex-column-reverse">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 ">
            <SectionTitle
              sectTilte={"Experience the Macber Advantage"}
              className="mb-3"
            />
            <div className="">
              <div className="mb-3">
                <SectionTitle
                  className="bold-400 darkBlue"
                  sectTilte={" Launch Better Products"}
                />
                <Paragraph className="desc-black w-80 my-2 t_just">
                  Focus on your core competencies and strategic initiatives
                  while we handle the complexities of software development. By
                  entrusting us with your product development, you gain the
                  freedom to excel in areas that drive your business forward.
                </Paragraph>
              </div>
              <div className="">
                <SectionTitle
                  className="bold-400 darkBlue"
                  sectTilte={"  Scale Up Your Team"}
                />
                <Paragraph className="desc-black my-2 w-80 t_just">
                  Whether you need to augment your existing workforce or
                  assemble an entirely new development team, we have the
                  resources and flexibility to meet your requirements. Our
                  collaborative approach ensures seamless integration with your
                  in-house team, allowing for efficient communication, faster
                  time-to-market,and enhanced productivity. Together, we can
                  achieve remarkable results.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <img className="w-100 border-radus-32" src={MediaSrc} alt="macber" />
          </div>
        </div>
      </div>
    </>
  );
};
export default KnowAbotUS;
