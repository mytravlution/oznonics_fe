import React from "react";
import "./loader.scss";

export default function Loader({file}) {
  return (
  <div className="main-loader">
    <img style={{"marginRight":"20%"}} src={require("../../images/loader3.gif")} alt="logo" />
   {file==="file" ? <h3 style={{"marginRight":"20%"}}>File is being uploaded. Please wait...</h3>:null}
    </div>
  )
}
