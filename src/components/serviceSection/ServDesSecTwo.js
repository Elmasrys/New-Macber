import React from 'react';
import Card from '../../UI/Card';
import SectionTitle from '../../Layout/SectionTitle';
const ServDesSecTwo = ()=> {
  return (
    <>
     <div className="py-4">
        <SectionTitle sectTilte={"DELIVERABLES"} />
        <div className="row pt-5 ">
          <div className="col-xl-3 col-md-6">
            <Card
              className="card-service p-5 "
              title={"Ux Research"}
              titleStyle={"lightBlue3 bold-700 font-sm pb-5"}
              desc={
                "To design & build a product that will add value to your users’ lives."
              }
              descStyle={"opacity-50"}
            />
          </div>
          <div className="col-xl-3 col-md-6">
            <Card
              className="card-service p-5 "
              title={"Information Architecture"}
              titleStyle={"lightBlue3 bold-700 font-sm pb-4"}
              desc={
                "We create site maps and content hierarchies for element placement."
              }
              descStyle={"opacity-50"}
            />
          </div>
          <div className="col-xl-3 col-md-6">
            <Card
              className="card-service p-5 "
              title={"Design System"}
              titleStyle={"lightBlue3 bold-700 font-sm"}
              desc={
                "We create a set of design standards and components to guide efficient design"
              }
              descStyle={"opacity-50 py-4"}
            />
          </div>
          <div className="col-xl-3 col-md-6">
            <Card
              className="card-service p-5 "
              title={"Low-Fidelity & High-Fidelity "}
              titleStyle={"lightBlue3 bold-700 font-sm"}
              desc={
                "We design and map out the look, feel, and functionality of the product."
              }
              descStyle={"opacity-50"}
            />
          </div>
        </div>
      </div></>
  )
}

export default ServDesSecTwo