import Paragraph from "./Paragraph";

const Input = (props)=>{
    return (
        <>
            <label htmlFor={props.id} className='label'>{props.label}</label>
            <input 
                id={props.id}
                type={props.type}
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </>
    );
}
export default Input;