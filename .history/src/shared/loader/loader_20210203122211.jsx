import React from "react";
import "./loader.scss";

export default function Loader({file}) {
  return (
  <div className="main-loader">
    <img style={{"marginRight":"20%"}} src={require("../../images/loader3.gif")} alt="logo" />
   {file==="file" ? <h2>File is being uploaded. Please wait...</div>:null}
    </div>
  )
}
