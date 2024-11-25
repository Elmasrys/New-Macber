import Paragraph from "../../UI/Paragraph";
import team from '../../assets/icons/team_work_career.svg';
import secured from '../../assets/icons/secured_career.svg';
import learn from '../../assets/icons/learn_career.svg';
import upgrate from '../../assets/icons/Upgrade_Career.svg';
import SectionTitle from "../../Layout/SectionTitle";


const CarrerSection = ()=>{
    const Carer = [
      {
        id: 1,
        img: team,
        text: "Team work",
        backgroundColor: "#DCE1FF",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      },
      {
        id: 2,
        img: secured,
        text: "Secured Future",
        backgroundColor: "#DCE1FF",

        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      },
      {
        id: 3,
        img: learn,
        text: "Learning Opportunity",
        backgroundColor: "#DCE1FF",

        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      },
      {
        id: 4,
        img: upgrate,
        text: "Upgrade Skills",
        backgroundColor: "#DCE1FF",

        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      },
    ];
    return (
      <>
        <section className="py-5">
          <div className="container text_center">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12"
              >
                <SectionTitle
                  sectTilte={"Why you Should Join Our Team"}
                />
                <div className="pt-xl-4">
                  <Paragraph className="black">
                    we want to feel like home when you are working at Macber &{" "}
                    <br /> for that we have curated a great set of benefits for
                    you.
                  </Paragraph>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                  {Carer.map((i, index) => {
                    return (
                      <div className="col-xl-6 col-md-6 " key={index}>
                        <div className="mb-5" key={i.id}>
                          <img
                            className="p-3 rounded mb-1"
                            style={{ backgroundColor: `${i.backgroundColor}` }}
                            src={i.img}
                            loading="lazy"
                            alt="/"
                          />
                          <Paragraph className="font-normalize primaryBlue mb-1">
                            {i.text}
                          </Paragraph>
                          <Paragraph className="lightGrey5 mt-0">
                            {i.desc}
                          </Paragraph>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
    
}
export default CarrerSection;