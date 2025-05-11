import Slider from "react-slick";
import BackGroundLight from '../../Layout/BackGroundLight';
import Paragraph from '../../UI/Paragraph';
const TeamTestimonials = (props)=>{
    const settings = {
        centerPadding: '30px',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        cssEase: "linear",
        lazyLoad: 'ondemand',
    };
    return (
      <>
        <section className="backGround_light">
          <Slider {...settings} className={`py-5`}>
            <BackGroundLight className="backGround_transparent text-center height_special d-flex justify-content-center align-items-center py-4">
              <div className="container">
                <Paragraph className="text-quote w-75 mx-auto pb-5">
                  “The impact we create is all because of our people. They are
                  the ones who truly deliver on our promise.”
                </Paragraph>
                <Paragraph className="desc-blue desc-blue-small pb-2">
                  Ahmed Medhat
                </Paragraph>
                <Paragraph>Partner and CEO</Paragraph>
              </div>
            </BackGroundLight>
            <BackGroundLight className="backGround_transparent text-center height_special d-flex justify-content-center align-items-center py-4">
              <div className="container">
                <Paragraph className="text-quote w-75 mx-auto pb-5">
                  “We have solidified our position as
                  a trusted partner for more than 400   businesses seeking to elevate their digital innovation. We view each project as a partnership, and our commitment to your success is unwavering”
                </Paragraph>
                <Paragraph className="desc-blue desc-blue-small pb-2">
                  Sherif Elmasry
                </Paragraph>
                <Paragraph>Partner and CBO</Paragraph>
              </div>
            </BackGroundLight>
          </Slider>
        </section>
      </>
    );
}
export default TeamTestimonials;