
import React from 'react';
import SectionTitle from "../../Layout/SectionTitle";
import Paragraph from "../../UI/Paragraph";

const MissionVision = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-10">
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
