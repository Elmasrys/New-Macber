import {useState} from 'react';
// import CardManger from '../../UI/CardManger';
import Button from "../../UI/Button";
import teams from '../../data/TeamData';
import CardTeam from '../../UI/CardTeam';

const TeamMember = (props)=>{
    const [showMore, setShowMore] = useState(false);
    const [teamIndex, setTeamIndex] = useState(10);
    const teamsToShow = showMore ? teams : teams.slice(0, teamIndex);
    const handleShowMore = () => {
        const newIndex = teamIndex + 5;
        setTeamIndex(newIndex);
        setShowMore(newIndex >= teams.length);
    };
    return (
      <>
        <div className="team-desktop">
          <div className="row row-cols-lg-5 row-cols-md-3 g-lg-3 g-2 py-5 ">
            {teamsToShow.map((team) => {
              return (
                <div className="col" key={team.id}>
                  <CardTeam
                    src={team.src}
                    className={
                      "team-member width-fit-content mx-auto border-radus-32"
                    }
                    overlay={"team-member-info"}
                    // width="100%"
                    // height="240px"
                    lead={false}
                    person={{
                      name: team.person.name,
                      position: team.person.position,
                      info: team.person.info,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}
export default TeamMember;