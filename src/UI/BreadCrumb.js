import { NavLink } from "react-router-dom";

const BreadCrumb = (props)=>{
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className={`breadcrumb`}>
                    <li className="breadcrumb-item"><NavLink to={'/'}>{props.home === ''? props.home :"home" }</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                </ol>
            </nav>
        </>
    );
}
export default BreadCrumb;