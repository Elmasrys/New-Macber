import SectionTitle from '../../Layout/SectionTitle';
import MediaSrc from '../../assets/New/videoPlaceholder.jpg';
import Paragraph from '../../UI/Paragraph';
import Media from '../../UI/Media';
import Slider from "react-slick";
import lara from '../../assets/icons/lara.svg'
const Testimonials = ()=>{
    const settings = {
      infinite: true,
      slidesToShow: 1,
      centerPadding: "30px",
      slidesToScroll: 1,
      autoplay:true,
      // cssEase: "linear",

    
    };
    return (
      <>
        <div className="container pb-5 testimonials">
          <SectionTitle sectTilte={"What our clients say"} />
          <div className="col-xl-7 col-lg-9 col-12 mx-auto">
            <Slider {...settings} className={`py-5`}>
              <div>
                <div className="testimonial_opinion">
                  <Media className="mb-4" type="img" src={lara} />
                  <Paragraph className="text-black bold-500">
                    Lora Smith
                  </Paragraph>
                  <Paragraph className="desc-black">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Paragraph>
                </div>
              </div>
              <div className="">
                <Media
                  type="img"
                  src={MediaSrc}
                  alt="media name"
                  width="380px"
                  height="380px"
                />
                <div className="testimonial_section">
                  <Paragraph className="text-black bold-500 mb-1">
                    Lora Smith
                  </Paragraph>
                  <Paragraph className="desc-black">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Paragraph>
                </div>
              </div>

              <div className="">
                <Media
                  type="img"
                  src={MediaSrc}
                  alt="media name"
                  width="380px"
                  height="380px"
                />
                <div className="testimonial_section">
                  <Paragraph className="text-black bold-500 mb-1">
                    Lora Smith
                  </Paragraph>
                  <Paragraph className="desc-black">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Paragraph>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
}
export default Testimonials;