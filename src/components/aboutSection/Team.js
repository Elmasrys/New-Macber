import SectionTitle from "../../Layout/SectionTitle";
import CardManger from "../../UI/CardManger";
import ceo from "../../assets/New/Medhat.jpg";
import cco from "../../assets/New/Sherif.jpg";
import ScrollTeam from "../MobDesign/ScrollTeam";
import TeamMember from "./TeamMember";
const Team = (props) => {
  return (
    <>
      <div className={`container ${props.padding}`}>
        <div className="">
          <SectionTitle sectTilte={"Meet the Team"} padding={""} />
        </div>
        <div className="row justify-content-center m-auto team-desktop">
          <div className="col-xl-3 col-md-6 col-sm-12   mb-xl-0 mb-4 ">
            <CardManger
              src={ceo}
              className={"team-member border-radus-32"}
              overlay={"team-member-info"}
              lead={false}
              person={{
                name: "Ahmed Medhat",
                position: "Chairman & CEO",
                socialLinks: {
                  linkedin: "https://www.linkedin.com/",
                  behance: "",
                  githup: "",
                },
              }}
            />
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12   mb-xl-0 mb-4  ">
            <CardManger
              src={cco}
              className={"team-member border-radus-32"}
              overlay={"team-member-info"}
              lead={false}
              person={{
                name: "Sherif K. Elmasry",
                position: "Vice Chairman & CCO",
                socialLinks: {
                  linkedin: "https://www.linkedin.com/",
                },
              }}
            />
          </div>
        </div>
        <TeamMember />
        <ScrollTeam />
      </div>
    </>
  );
};
export default Team;
