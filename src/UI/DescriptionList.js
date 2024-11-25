import Paragraph from "./Paragraph";
import './DescriptionList.css';

const DescriptionList = (props)=>{
    return (
      <>
        <Paragraph className="darkBlue font-sm bold-500 pt-xl-3 ms-2">
          {props.descList.title}
        </Paragraph>
        <ul className="py-2">
          {props.descList.items.map((item, index) => {
            return (
              <li className={`${props.descList.className}`} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </>
    );
}
export default DescriptionList;