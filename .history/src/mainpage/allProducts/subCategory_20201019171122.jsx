import React, { useState } from 'react'


export default function SubCategory({ subCategorySelected, detailSelected }) {

    const [inDetailClicked, setInDetailClicked] = useState(false);
    
    const onSubCategoryClicked = (event) => {
        setInDetailClicked(true);
        setDetail(event.target.value);
        console.log("details:" + subCategorySelected);
    }

    const arr1 = [];
    if((detailSelected==="mechanical") &&(subCategorySelected === "product drawing")){
            arr1.push('3D Drawings', '2D Drawings');
    }
   
    return (
        <div>
            <div className="prodDetail-outer">
    <p>{subCategorySelected} >> {detailSelected}</p>
            
               {arr1.map(cat=>{
                   return(
                   <button className="sub-category-inner">{cat}</button>
                   )
               })}
            </div>

        </div>
    )
}