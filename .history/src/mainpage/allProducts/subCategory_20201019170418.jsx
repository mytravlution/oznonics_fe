import React from 'react'

export default function subCategory({ subCategorySelected, detailSelected }) {

    const arr1 = [];
    if((detailSelected==="mechanical") &&(subCategorySelected === "product drawing")){
            arr1.push('3D Drawings', '2D Drawings');
    }
   $("#button").click(function(){
       $("#button").addClass('button-clicked');
   })
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
