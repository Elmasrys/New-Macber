import React from 'react';
import Paragraph from '../../UI/Paragraph';
import img_1 from '../../assets/New/Gallery_event_2.jpg';
import img_2 from '../../assets/New/Gallery_event_3.jpg';
import img_3 from '../../assets/New/Gallery_event_4.jpg';
import img_4 from '../../assets/New/Gallery_event_1.jpg';
import img_5 from '../../assets/New/Gallery_event_5.jpg';
import SectionTitle from '../../Layout/SectionTitle';
const CareerEventGallery = ()=> {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="py-5">
            <SectionTitle sectTilte={"  Gallery"} />
            <Paragraph className="black w-70">
          
            </Paragraph>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-12 col-sm-12 mb-xl-0 pb-5">
              <img src={img_1} alt="img" className="w-100 border-radus-32" />
            </div>
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <img src={img_2} className="w-100 mb-5 border-radus-32" alt="img" />
                  <img src={img_3} className="w-100 mb-5 border-radus-32" alt="img" />
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <img src={img_4} className="w-100 mb-5 border-radus-32" alt="img" />
                  <img src={img_5} className="w-100 mb-5 border-radus-32" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerEventGallery