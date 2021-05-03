import React from "react";
import "./loader.scss";

export default function Loader({file, loaderCategory}) {
  return (
  <div className="main-loader">
    <img style={{"marginRight":"20%"}} src={require("../../images/loader3.gif")} alt="logo" />
  {file==="file" ? <h3 style={{"marginRight":"20%"}}>File is being 
  {loaderCategory==="download" ? <p>downloaded:uploaded}. Please wait...</h3>:null}
    </div>
  )
}
