import React from 'react'
import Paragraph from '../../UI/Paragraph';
import Ph from '../../assets/Phonie.svg';
import Media from '../../UI/Media';
const Typo =(props)=> {
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-6 ">
        <p className="btn_hex " style={props.styleFont}>
          {props.PraimaryFont}
        </p>
        <Paragraph className="bold-700" style={props.styleFamily}>
          {props.all}
          {/* <br /> */}
          {/* <span>1 2 3 4 5 6 7 8 9 0</span> */}
        </Paragraph>
        <div className="div_poppins">
          <Paragraph className="top_font">{props.text}</Paragraph>
          <Paragraph className="opacity-50">Google font</Paragraph>
          <Paragraph className="opacity-50">{props.width}</Paragraph>
          {props.width2 ? (
            <Paragraph className="opacity-50">{props.width2} </Paragraph>
          ) : (
            ""
          )}
          {props.width3 ? (
            <Paragraph className="opacity-50">{props.width3} </Paragraph>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Typo
