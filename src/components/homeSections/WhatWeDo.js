import Paragraph from "../../UI/Paragraph";
import SectionTitle from "../../Layout/SectionTitle";
import Button from "../../UI/Button";
import BackGroundLight from "../../Layout/BackGroundLight";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <section className="py-5">
      <BackGroundLight>
        <div className="container py-5">
          <SectionTitle sectTilte={"What We Do"} className="text-center mb-5" />
          <div className="row g-4">
            <div className="col-lg-4 col-md-12">
              <div className={styles.service_card}>
                <SectionTitle sectTilte={"Macber Studio"} className="mb-3" />
                <Paragraph className="subtitle-dark mb-2">
                  Custom-Built Software Solutions
                </Paragraph>
                <Paragraph className="desc-black mb-4">
                  Studio delivers tailored software and automation solutions—designed to solve complex problems, boost efficiency, and drive digital innovation.
                </Paragraph>
                <ul className="list-unstyled">
                  <li><Paragraph className="desc-black mb-2">• Web & Mobile App Development</Paragraph></li>
                  <li><Paragraph className="desc-black mb-2">• AI Development & Intelligent Automation</Paragraph></li>
                  <li><Paragraph className="desc-black mb-2">• SaaS Platforms & System Architecture</Paragraph></li>
                  <li><Paragraph className="desc-black mb-2">• UX/UI Design</Paragraph></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className={styles.service_card}>
                <SectionTitle sectTilte={"Macber Amplify"} className="mb-3" />
                <Paragraph className="subtitle-dark mb-2">
                  Agile Talent, Deployed at Scale
                </Paragraph>
                <Paragraph className="desc-black mb-4">
                  Scale your capabilities with dedicated engineers, agile squads, and domain experts who integrate seamlessly with your in-house teams. Amplify helps you accelerate product delivery while maintaining quality and control.
                </Paragraph>
                <ul className="list-unstyled">
                  <li><Paragraph className="desc-black mb-2">• Dedicated development teams</Paragraph></li>
                  <li><Paragraph className="desc-black mb-2">• On-demand staff augmentation</Paragraph></li>
                  <li><Paragraph className="desc-black mb-2">• Agile squads aligned to your roadmap</Paragraph></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className={styles.service_card}>
                <SectionTitle sectTilte={"Macber Stage"} className="mb-3" />
                <Paragraph className="subtitle-dark mb-2">
                  Technology That Powers Exceptional Events
                </Paragraph>
                <Paragraph className="desc-black mb-4">
                  Stage is our event technology suite, built to streamline operations and elevate the attendee experience with robust infrastructure and immersive digital interactions.
                </Paragraph>
                <ul className="list-unstyled">
                  <li><Paragraph className="desc-black mb-2">• Event Registration Platform</Paragraph></li>
                  <li><Paragraph className="desc-black mb-2">• Event Operations & On-Site Support</Paragraph></li>
                  <li><Paragraph className="desc-black mb-2">• Interactive AR/VR & Experiential Tech</Paragraph></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BackGroundLight>
    </section>
  );
};

export default WhatWeDo;