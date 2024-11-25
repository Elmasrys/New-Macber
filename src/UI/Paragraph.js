import './Paragraph.css';

const Paragraph = (props)=>{
    return(
        <p style={props.style} className={`${props.className}`} onClick={props.onClick}>{props.children}</p>
    );
}
export default Paragraph;