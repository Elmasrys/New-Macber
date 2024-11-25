import Media from "../../UI/Media";
import Paragraph from "../../UI/Paragraph";
import teamGallery1 from "../../assets/New/Boss.jpg";
import teamGallery2 from "../../assets/New/meetingfrindely.jpg";
import teamGallery3 from "../../assets/New/2Ahmed.jpg";
import teamGallery4 from "../../assets/New/meetingroom.jpg";
const TeamGallery = (props) => {
  return (
    <>
      <div className="container">
        <Paragraph
          className={"desc-blue desc-blue-small bold-700 py-5 lightBlue3"}
        >
          Team Gallery
        </Paragraph>
        <div className=" py-5 text-center">
          <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-1 g-3">
            <div className="col">
              <Media type="img" className="w-100 border-radus-32" src={teamGallery1} />
            </div>
            <div className="col d-flex flex-column justify-content-between align-items-center ">
              <Media
                type="img"
                className="w-100 mb-xl-0 mb-3 border-radus-32"
                src={teamGallery2}
              />
              <Media type="img" className="w-100 my-xl-0  border-radus-32" src={teamGallery3} />
            </div>
            <div className="col">
              <Media type="img" className="w-100 border-radus-32" src={teamGallery4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamGallery;
