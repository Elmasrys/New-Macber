import React from 'react'
import SectionTitle from '../../Layout/SectionTitle';
const ServDesSecThird =()=> {
  return (
    <>
      <div className="py-4">
        <SectionTitle sectTilte={"  What is the UX/UI Design process?"} />
        <ul className="pt-5">
          <li className="mb-4 lightGrey5 ">
            <span className="darkBlue bold-500">Define the problem: </span>
            Before we can move into any design, we need to understand why we’re
            doing it. This can only be done by clearly understanding the problem
            we’re trying to solve.
          </li>
          <li className="mb-4 lightGrey5 ">
            <span className="darkBlue bold-500">Clearly define our users:</span>
            We need to know for whom we’re solving the problem. The contextual
            things they might face in their day-to-day life can help us
            understand how to best make our product work for them. And although
            we discover these things in research, we need to clearly define them
            before we start building.
          </li>
          <li className="mb-4 lightGrey5 ">
            <span className="darkBlue bold-500">Ideate:</span>
            We utilize design practices like story mapping and sitemaps as the
            lowest fidelity versions of the product we’re building. These help
            us understand the complexity of the product and hash out important
            questions before we get into things like page layout and UI.
          </li>
          <li className="mb-4 lightGrey5 ">
            Define the core feature set that will best solve the problem at
            hand: Once we understand the core functionality, we use user stories
            to hone in on what matters and cut the fluff distracting from the
            core experience.
          </li>
          <li className="mb-4 lightGrey5 ">
            <span className="darkBlue bold-500">Low-fidelity wireframes: </span>
            Once we understand the direction of the product and the general
            hierarchy, we start ideating what these actual pages look like. In
            this stage, we’re both trying to understand things like layout and
            what content goes where. However, this stage is also the next filter
            for complexity . Here, we can start to get a better understanding of
            all the content and subpages that will need to exist.
          </li>
          <li className="mb-4 lightGrey5 ">
            <span className="darkBlue bold-500">
              High-fidelity wireframes/design system:
            </span>
            At this stage, we put together all of the pieces in their full
            fidelity and complexity . We build out systems that make changes and
            hand-off to developers who can build out pages that can be utilized
            in usability tests.
          </li>
        </ul>
      </div>
    </>
  );
}

export default ServDesSecThird
