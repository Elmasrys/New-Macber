import React from 'react';
import SectionTitle from "../../Layout/SectionTitle";
import Paragraph from "../../UI/Paragraph";

const MissionVision = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="mb-5">
            <Paragraph className="text-black-light pt-xl-5 pt-2 t_just">
              <Paragraph className="title-blue">Global Technology Partner for Digital Transformation</Paragraph>
              Macber is a UK-headquartered technology company with deep operational roots in Egypt, Saudi Arabia, and the UAE. We partner with ambitious organizations to deliver high-impact digital solutions—combining engineering excellence, strategic thinking, and regionally aligned execution.
              We build long-term partnerships that enable growth, efficiency, and innovation across industries. From digital product development and AI automation to large-scale event technology, Macber operates at the intersection of creativity, technology, and impact.
            </Paragraph>
          </div>
          <div className="mb-5">
            <SectionTitle sectTilte="Our Mission" className="mb-4" />
            <Paragraph className="desc-black">
              To empower businesses across the MENA region and beyond with future-ready digital solutions that drive growth, simplify operations, and unlock new opportunities.
            </Paragraph>
          </div>
          <div>
            <SectionTitle sectTilte="Our Vision" className="mb-4" />
            <Paragraph className="desc-black">
              To become the region's most trusted digital transformation partner—powering a new generation of technology-first organizations through intelligence, agility, and craft.
            </Paragraph>
          </div>
        </div>
        <div className="container py-5">
          <SectionTitle sectTilte={"Leadership & Culture"} padding={"pb-4"} />
          <div className="row">
            <div className="col-12">
              <Paragraph className="desc-black my-2 t_just">
                Macber is led by experienced founders and operators with backgrounds in product development, venture building, and enterprise delivery. Our teams are:
              </Paragraph>
              <ul className="list-unstyled py-3">
                <li className="mb-3">
                  <Paragraph className="desc-black my-2">
                    <strong>Multidisciplinary</strong> – Product thinkers, engineers, analysts, creatives
                  </Paragraph>
                </li>
                <li className="mb-3">
                  <Paragraph className="desc-black my-2">
                    <strong>Culturally Fluent</strong> – Fluent in English, Arabic, and cross-border collaboration
                  </Paragraph>
                </li>
                <li className="mb-3">
                  <Paragraph className="desc-black my-2">
                    <strong>Obsessed with Impact</strong> – We measure success by business outcomes, not just deliverables
                  </Paragraph>
                </li>
              </ul>
              <Paragraph className="desc-black my-2 t_just">
                We cultivate a culture of ownership, experimentation, and continuous improvement.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MissionVision;