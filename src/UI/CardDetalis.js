import React from 'react'
import Media from './Media';
import Paragraph from './Paragraph';
import ArrowCardCountinue from './ArrowCardCountinue';
const CardDetalis = (props) => {
  return (
    <>
      <div className="card-details d-flex my-4">
        <Media className="img-details border-radus-32" type="img" src={props.src} />
        <div className="px-3">
          <Paragraph className="text-black bold-700 font-xs m-0">
          {props.title}
          </Paragraph>
          <Paragraph className="t_just bold-500 fs-11 m-0 py-2">
          {props.desc}
          </Paragraph>
          <ArrowCardCountinue to={props.to} />
        </div>
      </div>
    </>
  );
}

export default CardDetalis
