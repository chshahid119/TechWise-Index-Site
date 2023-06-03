import React from "react";
import { NavLink } from "react-router-dom";

const Service = ({imgsrc,title}) => {
  return (
    <>
     <div className="col-md-4 col-10 mx-auto">
<div class="card"  >
  <img src={imgsrc} class="card-img-top" alt="no"  style={{width:"auto",
  height:"10rem"}}/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">
      Some quick example text to build on the card title and
      make up the bulk of the card's content.
    </p>
    <NavLink to='/services' className="btn btn-secondary btn-sm">
      Start Course
    </NavLink>
  </div>
</div>
</div>
    </>
  );
};

export default Service;


