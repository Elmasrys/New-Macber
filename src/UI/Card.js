import Paragraph from "./Paragraph";
import Button from "./Button";
import Media from "../UI/Media";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      {/* <div className={`card h-100 ${props.className}`} > */}
      <div className={`card h-100 ${props.className}`}>
        <div className="img_container">
          <Media
            src={props.image}
            alt="icon"
            type="img"
            width={props.imgWidth}
            height={props.imgHeight}
          />
        </div>
        <div className="d-flex align-items-center">
          {props.BuildIcon && (
            <Media src={props.BuildIcon} width="32px" type="img" />
          )}
          {props.mainTitle ? (
            <Paragraph className={`${props.titleStyle} my-3`}>
              {props.mainTitle && props.mainTitle.slice(0, 25)}
              ...
            </Paragraph>
          ) : (
            ""
          )}

          <Paragraph className={`${props.titleStyle} my-3`}>
            {props.title && props.title.slice(0, 28)}
          </Paragraph>
        </div>
        {
          <Paragraph className={`${props.descStyleOffice} pb-4`}>
            {props.descOffice && props.descOffice}
          </Paragraph>
        }
        {props.desc ? (
          <Paragraph className={`${props.descStyle} pb-4`}>
            {props.desc && props.desc.slice()}
          </Paragraph>
        ) : (
          ""
        )}
        <div className="d-flex align-items-center">
          <Button
            className={`border-0 p-0 align-self-start ${props.linkStyle}`}
            tagType="link"
            to={props.to}
          >
            {props.countryIcon && (
              <Media src={props.countryIcon} width="16px" type="img" />
            )}
            <span className={`${props.linkColor}`}>{props.link}</span>
            {props.arrowColor && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M4.97058 11.4667C4.77167 11.4667 4.5809 11.5456 4.44025 11.6861C4.2996 11.8266 4.22058 12.0172 4.22058 12.2159C4.22058 12.4146 4.2996 12.6052 4.44025 12.7457C4.5809 12.8862 4.77167 12.9651 4.97058 12.9651L4.97058 11.4667ZM4.97058 12.9651L20.9706 12.9651L20.9706 11.4667L4.97058 11.4667L4.97058 12.9651Z"
                  fill={props.arrowColor}
                />
                <path
                  d="M14.9706 6.22238L20.9706 12.2159L14.9706 18.2095"
                  stroke={props.arrowColor}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};
export default Card;
