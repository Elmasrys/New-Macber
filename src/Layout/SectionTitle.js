import Paragraph from '../UI/Paragraph';
import DarkSvg from '../UI/DarkSvg';

const SectionTitle = (props)=>{
    return(
        <>
            {!props.hr && <div className={`d-flex justify-content-start align-items-start ${props.padding} ${props.className}`}>
                {/* <DarkSvg/> */}
                <div>
                    <Paragraph className={` ${props.className} ${"title-blue mt-3"}`}>{props.sectTilte}</Paragraph>
                </div>
            </div>}
            {props.hr && <div className={`title d-flex align-items-center ${props.className}`}>
                <Paragraph className={`p_title mb-0 col-lg-3 col-md-4 col-sm-8 col-12`}>{props.sectTilte}</Paragraph>
                <hr className='hr'/>
            </div>}
        </>
    );
}
export default SectionTitle;