import React, { useState } from 'react'
import MidHeader from '../../shared/midHeader/midHeader';
import Header from "../../shared/header/header";
import { Link } from 'react-router-dom';



export default function MainLanding() {
     // var user_type = localStorage.getItem('user-type');
     const [inProductClicked, setInProductClicked] = useState(false);
     var segment = localStorage.getItem('segment');
     const arr1 = ["Products", "Operations", "Marketing", "Sales", "Finance","Legal","HR"];
 
     const onProductClicked = (event) => {
         setInProductClicked(true);
         console.log("Product:" + inProductClicked);
     }
 
     return (
         <div className="bg-color">
             <Header />
             {segment===null ? <div className="not-logged">User not logged in <br /><u> <a href="/" className="not-logged" style={{color:"white"}}>Click Here!</a></u> </div> :
             <div className="products-outer">
                 
                 <MidHeader />
                       
             <h2><span>Main Page</span></h2>

                 <div className="products-parent">
               
                     {arr1.map((cat, index) => {
                         if (segment === "All") {
                             return (
                                 <div className="products-inner" key={index}>
                                     <Link to={`/${cat}/`} style={{ color: "black" }}>
                                         <button onClick={onProductClicked} className="product-button">{cat}
                                         </button>
                                     </Link></div>
                             )
                         }
                         else if (segment === cat) {
                             return (
                                 <div className="products-inner">
                                     <Link to={`/${cat}`} style={{ color: "black" }}>
                                         <button onClick={onProductClicked} className="product-button">{cat}
                                         </button>
                                     </Link></div>
                             )
                         } else {
                             return (
                                 <div> </div>
                             )
                         }
                     })}
                     
                   </div>
              
             </div>
               }
             {inProductClicked && <h3>Clicked</h3>}

 
         </div>
 
     )
}
