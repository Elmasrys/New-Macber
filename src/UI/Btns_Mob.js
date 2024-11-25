import React from 'react'
import Slider from "react-slick";
import Button from './Button';
import { useForm } from '../context/ContextForm';
const Btns_Mob = ()=> {
   const ProductItem = useForm();
   function handleItem(e) {
     ProductItem.handleproduct(e.target.id);
   }
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      rtl: true,
           responsive: [
      
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false

          }
        }
      ]
    };
  return (
    <>
      <div className="btns_mob">
        <Slider {...settings}>
          <div>
            <Button
              onclick={handleItem}
              className="btn-white border-blue btn-scale px_btn "
              tagType="link"
              id="All"
            >
              All Work
            </Button>
          </div>
          <div>
            <Button
              onclick={handleItem}
              className="btn-white border-blue btn-scale px_btn "
              tagType="link"
              id="Product"
            >
              Product
            </Button>
          </div>
          <div>
            <Button
              onclick={handleItem}
              className="btn-white border-blue btn-scale px_btn "
              tagType="link"
              id="All"
            >
              Design
            </Button>
          </div>
          <div>
            <Button
              onclick={handleItem}
              className="btn-white border-blue btn-scale px_btn "
              tagType="link"
              id="Commerce"
            >
              Commerce
            </Button>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Btns_Mob


