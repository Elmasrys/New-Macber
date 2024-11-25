import React from 'react'
import Paragraph from '../../UI/Paragraph';

const AboutProject =({Items})=> {
  return (
    <>
      <section>
        <div className="container">
          {Items.map((item) => {
            return (<>
          <Paragraph className=" desc-blue-sm font-sm darkBlue  ">
           {item.TopTitle}
          </Paragraph>
              <div className="row flex_baseline">
                <div className="col-xl-3 col-md-6 col-sm-12">
                  <Paragraph className="desc-blue p_2">{item.title}</Paragraph>
                </div>
                <div className="col-xl-9 col-md-6 col-sm-12">
                  <Paragraph className="t_just">{item.DescCompany}</Paragraph>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AboutProject
