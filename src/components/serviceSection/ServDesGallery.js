import React from 'react'
import Media from '../../UI/Media';
import board from "../../assets/New/boardpapers.jpg";
import phone from "../../assets/New/Phonepaper.jpg";
import phone2 from "../../assets/New/Phonepaper2.jpg";
import lab from "../../assets/New/labpaper.jpg";
function ServDesGallery() {
  return (
    <>
      <div className="pb-5">
        <div className="row g-3">
          <div className="col-xl-4 col-md-6">
            <Media src={board} className="w-100" type="img" />
          </div>
          <div className="col-xl-4 col-md-6">
            <Media className="mb-3 w-100" src={phone} type="img" />
            <Media src={phone2} className="w-100" type="img" />
          </div>
          <div className="col-xl-4 col-md-6">
            <Media src={lab} className="w-100" type="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServDesGallery
