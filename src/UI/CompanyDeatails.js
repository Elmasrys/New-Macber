import React from 'react'
import Paragraph from './Paragraph';
const  CompanyDeatails=({Details}) =>{
    {console.log(Details);}
  return (
    <>
    {Details.map((item) =>{
return(
    <div className='container'>

        <div className="row py-3">
            <div className='col-6'>

          <Paragraph className="desc-blue p_2">{item.title}</Paragraph>
            </div>
          <div className=" col-12 ">
            <Paragraph className="">{item.DescCompany}</Paragraph>
            {/* <Paragraph className="">{}</Paragraph> */}
          </div>
        </div>
    </div>
     ) })
}
    </>
  );
}

export default CompanyDeatails
