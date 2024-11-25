import Media from "../../UI/Media";
import MainHeaderWrapper from "../../Layout/MainHeaderWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import bg from "../../assets/New/Careerbd.jpg";
import detailsImg from "../../assets/careerDetails.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";
import jobIcon from "../../assets/icons/jobIcon.svg";
import datePostIcon from "../../assets/icons/datePostIcon.svg";
import experienceIcon from "../../assets/icons/experienceIcon.svg";
import weekCalenderIcon from "../../assets/icons/weekCalenderIcon.svg";
import workingHourIcon from "../../assets/icons/workingHourIcon.svg";
import openChairIcon from "../../assets/icons/openChairIcon.svg";
import Paragraph from "../../UI/Paragraph";
import DescriptionList from "../../UI/DescriptionList";
import Button from "../../UI/Button";
import facebookIconShare from "../../assets/icon/Facebook_Detalis.svg";
import instgramIconShare from "../../assets/icon/Instagram_Detalis.svg";
import linkedINIconShare from "../../assets/icon/Linkedin_Detalis..svg";
import SectionTitle from "../../Layout/SectionTitle";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
const CareerDetails = (props) => {
  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={bg} height="38rem" animate={true}>
          <SectionHeader
            className={""}
            title={"senior front end developer"}
            // callToActionOne={`apply now`}
            to="/about"
          />
        </MainHeaderWrapper>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-lg-8">
            <SectionTitle
              sectTilte={"senior front end developer"}
              padding={"pb-4"}
            />

            <DescriptionList
              descList={{
                title: "Responsibilities",
                items: [
                  "Determining the structure and design of web pages.",
                  "Ensuring user experience determines design choices",
                  "Developing features to enhance the user experience.",
                  "Striking a balance between functional and aesthetic design",
                  "Ensuring web design is optimized for smartphones.",
                  "Building reusable code for future use.",
                  "Optimizing web pages for maximum speed and scalability.",
                  "Utilizing a variety of markup languages to write web pages.",
                  "Maintaining brand consistency throughout the design.",
                ],
                className: "list bold-500",
              }}
            />
            <DescriptionList
              descList={{
                title: "Requirements",
                items: [
                  "Understanding of key design principles.",
                  "Proficiency in HTML, CSS, JavaScript, and jQuery.",
                  "Proficiency in React JS, Angular, and SASS.",
                  "Understanding of E-commerce domains, Frontend as a Service, or CMS FE.",
                  "Experience with graphic design applications such as Adobe Illustrator and Photoshop",
                  "Solid knowledge of accessibility, SEO, and UX aspects of frontend development",
                  "Experience with WordPress development.",
                  "Experience with responsive and adaptive design.",
                  "Experience using Git version control like Bitbucket or GitHub or Gitlab.",
                  "Ability to test cross-browser and cross-device compatibility and to debug.",
                  "Good problem-solving skills.",
                  "Excellent verbal communication skills.",
                  "Good interpersonal skills.",
                ],
                className: "list bold-500",
              }}
            />
            <DescriptionList
              descList={{
                title: "Working Hours",
                items: ["9 AM – 5 PM"],
                className: "list bold-500",
              }}
            />
            <DescriptionList
              descList={{
                title: "Working Days",
                items: ["Weekly: 5 days.", "Weekend: Friday.Saturday"],
                className: "list bold-500",
              }}
            />
          </div>
          <div className="col-12 col-lg-4">
            <div className="jobSummary py-5 px-4">
              <div>
                <Paragraph className="text-black font-sm bold-700">
                  Job Summary
                </Paragraph>
                <div className="d-flex justify-content-between align-items-center my-5">
                  <Media src={locationIcon} type="img" />
                  <div className="ms-3">
                    <Paragraph className="mb-0 opacity-50">Location</Paragraph>
                    <Paragraph className="mb-0 darkGreen">
                      Location Ground floor، district 3, area 2, talaat harb
                      axis apt. 2, cairo governorate...
                    </Paragraph>
                  </div>
                </div>
                <div className="d-flex align-items-center my-5">
                  <Media src={jobIcon} type="img" />
                  <div className="ms-3">
                    <Paragraph className="mb-0 opacity-50">Job Type</Paragraph>
                    <Paragraph className="mb-0 darkGreen">Full Time</Paragraph>
                  </div>
                </div>
                <div className="d-flex  align-items-center my-5">
                  <Media src={datePostIcon} type="img" />
                  <div className="ms-3">
                    <Paragraph className="mb-0 opacity-50">
                      Date posted
                    </Paragraph>
                    <Paragraph className="mb-0 darkGreen">
                      posted 1 month ago
                    </Paragraph>
                  </div>
                </div>
                <div className="d-flex align-items-center my-5">
                  <Media src={experienceIcon} type="img" />
                  <div className="ms-3">
                    <Paragraph className="mb-0 opacity-50">
                      Experience
                    </Paragraph>
                    <Paragraph className="mb-0 darkGreen">
                      Experience: 3-5 year
                    </Paragraph>
                  </div>
                </div>
                <div className="d-flex  align-items-center my-5">
                  <Media src={workingHourIcon} type="img" />
                  <div className="ms-3">
                    <Paragraph className="mb-0 opacity-50">
                      Working Hours
                    </Paragraph>
                    <Paragraph className="mb-0 darkGreen">
                      9 AM - 5 PM
                    </Paragraph>
                  </div>
                </div>
                <div className="d-flex  align-items-center my-5">
                  <Media src={weekCalenderIcon} type="img" />
                  <div className="ms-3">
                    <Paragraph className="mb-0 opacity-50">
                      Working Days
                    </Paragraph>
                    <Paragraph className="mb-0 darkGreen">
                      Weekly: 5days Weekend: Saturday,Sunday
                    </Paragraph>
                  </div>
                </div>
                {/* <div className="d-flex align-items-center my-5">
                  <Media src={openChairIcon} type="img" />
                  <div className="ms-3">
                    <Paragraph className="mb-0 opacity-50"> Vacancy </Paragraph>
                    <Paragraph className="mb-0 darkGreen">
                      No.of Vacancy:3
                    </Paragraph>
                  </div>
                </div>
                <Paragraph className="ms-2">View all job</Paragraph> */}
              </div>
            </div>
            <div className="py-5">
              <Paragraph>Share this:</Paragraph>
              <FacebookShareButton
                url={"https://www.facebook.com/Macberllc/"}
                quote={"Check out this awesome website!"}
              >
                <Media src={facebookIconShare} type="img" />
              </FacebookShareButton>
              {/* <a
                href="https://www.facebook.com/Macberllc/"
                className="p-0 pe-2"
              >
                <Media src={facebookIconShare} type="img" />
              </a> */}
              <LinkedinShareButton
                className="px-1"
                url="https://www.linkedin.com/company/macbercompany/mycompany/"
              >
                <Media src={linkedINIconShare} type="img" />
              </LinkedinShareButton>
              {/* <a
                href="https://www.linkedin.com/company/macbercompany/mycompany/"
                className="p-0 px-1"
              ></a> */}
              {/* <a
                href="https://instagram.com/macberegypt?igshid=OGQ5ZDc2ODk2ZA=="
                tagType="link"
                className="p-0 pe-2"
              >
                <Media src={instgramIconShare} type="img" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <a
            href="https://macber.zohorecruit.com/forms/bb0cfd15c5ccd63cf95c49cd56d39adf0c103d91cb3f76c34dd2dd63faa0e5f1"
            className="btn btn-blue btn-scale "
          >
            apply now
          </a>
        </div>
      </div>
    </>
  );
};

export default CareerDetails;
