import React from 'react'
import Paragraph from '../../UI/Paragraph';
import SectionTitle from '../../Layout/SectionTitle';
const ServDesSecOne = ()=> {
  return (
    <>
      <div className="">
        <div className="py-4">
          <SectionTitle sectTilte={"UX vs. UI Design"} />
          <Paragraph className="lightGrey5 pt-3">
            UX Design encompasses the overall, emotional experience your users
            have with your app or website—from usability, navigation, and
            workflow, to aesthetics and even customer service. Your goal is to
            make your app as easy-to-use and seamless and possible, to deliver
            your solution in the most tailored and effective way possible. UI
            Design is a facet of your UX—which is why the two are so often
            confused. However, UI is an important, standalone element of your
            app in itself. UI entails the way color schemes and typography guide
            usability; how branding and aesthetics attract your users; and how
            buttons, images, text entry fields, and animations enhance the user
            journey (and conversion.)
          </Paragraph>
        </div>
        <div className="py-4">
          <SectionTitle sectTilte={" Why does your product need UI/UX?"} />
          <Paragraph className="lightGrey5 pt-4">
            UI/UX design is no longer a “good-to-have” for your product/service.
            In a digital-driven world, where every product/service is creating
            their own unique value & identity in the digital space, UI/UX design
            can help you not only stay ahead of the competition but also fulfill
            the needs of your user base through creative & meaningful ways.
            Today, design-led companies outperform their competitors .In
            addition to enhancing the overall experience & aesthetics of your
            product, UI/UX design can also
          </Paragraph>
          <ul className="lightGrey5 ">
            <li className="font-xs">
              Increase user engagement, satisfaction, & product stickiness
            </li>
            <li className="font-xs">
              Create user-friendly, flexible, & efficient platforms
            </li>
            <li className="font-xs">
              Alleviate user pain points & help them complete tasks with ease
            </li>
            <li className="font-xs">
              Enable deeper & better understanding of your target demographic
            </li>
            <li className="font-xs">
              Open doors to better product/market fit & product innovation
            </li>
            <li className="font-xs">Help you grow & scale your business</li>
            <li className="font-xs">
              Enhances customer satisfaction that in turn raises your brand valu
            </li>
            <li className="font-xs">
              Optimize workflows & service design for enhancing employee
              experience
            </li>
            <li className="font-xs">
              Unleash legacy incumbents in a swift, disruptive & digital
              ecosystem
            </li>
            <li className="font-xs">
              Higher ROI in terms of larger market share, growth, customer
              satisfaction, & more
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ServDesSecOne