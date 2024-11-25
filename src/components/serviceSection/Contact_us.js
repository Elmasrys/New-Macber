import React from 'react';
import { Outlet } from 'react-router-dom';
import TypeForm from '../FormSteps/TypeForm';
import MainHeaderWrapper from '../../Layout/MainHeaderWrapper';
import SectionHeader from '../../Layout/SectionHeader';
import Conotact from '../../assets/New/Contac.jpg'
const Contact_us =()=> {
  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={Conotact} height="38rem" animate={true}>
          <SectionHeader
            bg={Conotact}
            titleName="w-70"
            title={"Contact us"}
            classNameOne={"px_btn"}
            // callToActionOne={"contact us"}
            // to="#contact-us"
          />
        </MainHeaderWrapper>
      </div>
      <div className="container-form position-relative p-xl-5 py-5">
        <span id="form"></span>
        <Outlet />
      </div>
    </>
  );
}

export default Contact_us
