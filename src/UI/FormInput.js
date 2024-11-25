import './FormInput.css';
const FormInput =(props)=>{
    const {label , onChange , id , ...inputProps} = props;
    return(
        <>
        <div className="form-input">
            <label className='mb-2 text-capitalize fw-bold'>{props.name}</label>
            <input className='size-input ps-2 mb-2'{...inputProps} onChange={onChange} />
        </div>
        </>
    )
};

export default  FormInput ;