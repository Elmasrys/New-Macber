import React from "react";
import CardWork from "../../UI/CardWork";
import { Project } from "../../data/BlogsData";
import { useForm } from "../../context/ContextForm";
import { Link } from "react-router-dom";
const WorksProject = (props) => {
  const Product = useForm();
  return (
    <>

{Project.map((Card , index) =>{
  return (
    <div
      key={index}
      className={
        Product.product === Card.nameItem || Product.product === Card.All
          ? "Card "
          : "Card hide  "
      }
    >
      <CardWork
        
        desc={Card.title}
        btn1={Card.btn1}
        btn2={Card.btn2}
        toImg={`${Card.id}`}
        src_Image={Card.imgLogo}
      >
        <Link to={`${Card.id}`}>
        {Card.logo}
        </Link>
      </CardWork>
    </div>
  );
})}
   

    </>
  );
};

export default WorksProject;
