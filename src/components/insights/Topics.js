import React, { useState } from 'react'
import Paragraph from '../../UI/Paragraph'
import Topic_1 from '../../assets/New/UITopic.jpg'
import Topic_2 from '../../assets/New/DevTopic.jpg'
import Media from '../../UI/Media'
import Button from '../../UI/Button'
import SectionTitle from '../../Layout/SectionTitle'
const Topics = () => {
// const day = new Date()
  const [date , setDate] = useState( new Date())

  return (
    
    <div className="py-5 container">
      <SectionTitle sectTilte={" Popular topics"} />
      <div className="row">
        <div className=" col-xl-6 col-md-6 col-sm-12 py-2 position-relative">
          <Button tagType="link" to={`/2`} className="btn_card_topic">
            Product Development
          </Button>
          <div className="card_topic">
            <Paragraph className="data_card m-xl2-">{date.getDate()} - {date.getMonth()} -{date.getFullYear()}</Paragraph>
            <Paragraph className="title_card_topic mb-xl-2">
              A Deep Dive into Macber'
            </Paragraph>
            <Paragraph className="disc_card_topic">
              In the ever-evolving landscape of product development, Macber
              stands as a beacon of innovation,...
            </Paragraph>
          </div>
          <Media type="img" className="w-100 border-radus-32" src={Topic_2} />
        </div>
        <div className=" col-xl-6 col-md-6 col-sm-12 py-2 position-relative">
          <Button tagType="link" to={`/1`} className="btn_card_topic">
            UX&UI Design
          </Button>
          <div className="card_topic">
            <Paragraph className="data_card mb-xl-2">{date.getDate()} - {date.getMonth()} -{date.getFullYear()}</Paragraph>
            <Paragraph className="title_card_topic mb-xl-2">
              Unveiling Macber's Prove
            </Paragraph>
            <Paragraph className="disc_card_topic">
              In the world of product development, success is not just about the
              result; it's about the meticulous strategies...
            </Paragraph>
          </div>
          <Media type="img" className="w-100 border-radus-32" src={Topic_1} />
        </div>
      </div>
    </div>
  );
}

export default Topics