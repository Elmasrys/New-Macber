import React from 'react'
import SectionHeader from '../Layout/SectionHeader';
import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import Insght from '../assets/New/INsi.png'
import Topics from './insights/Topics';
import './insights/insights.css'
import AllTopics from './insights/AllTopics';
import Button from '../UI/Button';
const Instght = () => {
  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={Insght} height="38rem" animate={true}>
          <SectionHeader
            titleName="title_home w-70"
            title={
              " Discover Our Insights on Technology, Marketing, and The Future of Work "
            }
            BreadCrumb={true}
            breadCrumbtitle={"Insights"}
          />
        </MainHeaderWrapper>
      </div>
      <Topics />
      <AllTopics />
      <div className="p_120 text-center">
        <Button
          className="btn-blue btn-scale mx-auto"
          tagType="link"
          to="/about"
        >
          Explore more
        </Button>
      </div>
    </>
  );
}

export default Instght