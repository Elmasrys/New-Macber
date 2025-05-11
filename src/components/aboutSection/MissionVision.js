
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
      </div>
    </section>
  );
};

export default MissionVision;
