import Media from "./Media";
import "./CardManger.css";
import Paragraph from "./Paragraph";
import { useState } from "react";

const CardTeam = (props) => {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <div className={`card ${props.className} align-items-center`}>
        <Media
          type={"img"}
          className={`card-img rounded-0 ${props.img_special}`}
          src={props.src}
          alt={`${props.src}`}
          width={`${props.width}`}
          height={`${props.height}`}
        />
        <div className={`team_card`}>
          <Paragraph className={`title-blue font-xs bold-500`}>
            {props.person.name}
          </Paragraph>
          <Paragraph className={`desc-black  fs-9s mb-0`}>
            {props.person.position}
          </Paragraph>
        </div>
      </div>
    </>
  );
};
export default CardTeam;
