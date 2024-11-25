import React from 'react'
import {useState} from 'react';
import CardTeam from '../../UI/CardTeam';
import Button from "../../UI/Button";
import teamsHire from "../../data/TeamHire";
import Paragraph from '../../UI/Paragraph';
import SectionTitle from '../../Layout/SectionTitle';
import Hiremob from '../MobDesign/Hiremob';
const  CareerHire = () => {

  return (
    <>
      <section className="py-5 backGround_light team-desktop">
        <div className="container">
          <div>
            <SectionTitle sectTilte={"New Hires"} />
            <Paragraph className="black w-50">
           
            </Paragraph>
          </div>
          <div className="row row-cols-2 row-cols-md-3  row-cols-lg-5 g-2 g-lg-3 py-5">
            {teamsHire.map((team) => {
              return (
                <div className="col" key={team.id}>
                  <CardTeam
                    src={team.src}
                    className={
                      "team-member width-fit-content mx-auto rounded-0"
                    }
                    overlay={"team-member-info"}
                    width="100%"
                    height="240px"
                    lead={false}
                    person={{
                      name: team.person.name,
                      position: team.person.position,
                      info: team.person.info,
                    }}
                  />
                </div>
              );
            })}
            {/* <div className="col-12 text-center mt-5">
            <Button
              className="btn-blue btn-scale"
              tagType="link"
              onclick={handleShowMore}
            >
              show more
            </Button>
          </div> */}
          </div>
        </div>
      </section>
      <Hiremob />
    </>
  );
}

export default CareerHire