import React, { useState } from 'react'
import SecondLevel from './secondLevel'
import { Redirect } from 'react-router-dom';

export default function SubCategory({ subCategorySelected, detailSelected, productselected }) {
    const [isSubCategoryClicked,setCategoryClicked] = useState(false);
    const [buttonValue, setButtonValue] = useState('0');
    const [secondLevel, setSecondLevel] = useState('');
    const [isFilethere, setIsFilethere] = useState('');
    
    const ext = productselected+"_"+detailSelected+"_"+subCategorySelected;

    const onSubCategoryClicked =(event)=> {
        setButtonValue(event.target.getAttribute("data-index"));
        setSecondLevel(event.target.value.split("?")[0]);
        setIsFilethere(event.target.value.split("?")[1]);
        setCategoryClicked(true);
        console.log("index:" + buttonValue+ ":"+isFilethere+":::"+secondLevel);
    }

    // let btn_class = isButtonClicked ? "clicked-button":"sub-category-inner";
    const arr1 = [];
    if ((detailSelected === "mechanical") && (subCategorySelected === "product drawings")) {
        arr1.push('3D Drawings?Yes', '2D Drawings?Yes');
    }
    else if ((detailSelected === "mechanical") && (subCategorySelected === "packaging")) {
        arr1.push('Outer Packing Data?No', 'Labels & Stickers?No');
    }
    else if ((detailSelected === "mechanical") && (subCategorySelected === "product assembly")) {
        arr1.push('Product Assembly?Yes', 'Packaging Assembly?No');
    }
    else if ((detailSelected === "mechanical") && ((subCategorySelected === "inline changes") || (subCategorySelected === "bom"))) {
        arr1.push('Main Product?No', 'Packaging?No');
    }
    else if ((detailSelected === "mechanical") && (subCategorySelected === "costing")) {
        arr1.push('Product Chassis?Yes', 'Packaging?No');
    }
    else if ((detailSelected === "electronics")) {
        arr1.push('Main Unit?No', 'Battery Pack & Charger?Yes');
    }
    else if ((detailSelected === "electrical") && ((subCategorySelected === "in-house designs") || (subCategorySelected === "externally sourced"))) {
        arr1.push('Front Control Panel?No', 'Coil & Transformer?Yes');
    }
    else if ((detailSelected === "electrical") && ((subCategorySelected === "new component dev") || (subCategorySelected === "inline changes") || (subCategorySelected === "costing") || (subCategorySelected === "bom")
    )) {
        arr1.push('Main Unit?No', 'Battery Pack & Charger?Yes');
    }
    else if ((detailSelected === "testing") && ((subCategorySelected === "testing protocols") || (subCategorySelected === "testing setup"))) {
        arr1.push('Main Unit?Yes', 'Battery Pack?Yes', 'Battery Charger?Yes', 'Other Components?No');
    }
    else if ((detailSelected === "testing") && ((subCategorySelected === "test results") || (subCategorySelected === "field input"))) {
        arr1.push('Main Unit?No', 'Battery Pack & Charger?Yes', 'Other Components?No');
    }
    return (
        <div>
            <div className="prodDetail-outer">
                {/* <p>{detailSelected.toUpperCase()}/{subCategorySelected}</p> */}

                {arr1.map((cat, index) => {
                   
                    return (
                        <div >
                            <button data-index={index} 
                            className={buttonValue.toString() === index.toString() ? 'sub-category-format sub-category-clicked' : ' sub-category-format sub-category-unclick'} 
                            value={cat.toLowerCase()} onClick={onSubCategoryClicked}
                            title={cat.split("?")[1] === "No" ? 'Click to add info' : null}>
                                {cat.split("?")[0]}
                            </button>
                        </div>
                    )
               
                })}
            </div>
            
                <div>
                    {isFilethere ==="yes" && <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <title>Document</title>
                    </head>
                    <body>
                        
                    </body>
                    </html>isSubCategoryClicked ?
                    <Redirect to={`/addImage/${ext}` }/>
                :<SecondLevel subCategorySelected={subCategorySelected} 
                detailSelected={detailSelected} secondLevelSelected={secondLevel} 
                productselected={productselected}/> }
                    {/* {isSubCategoryClicked && isFilethere==="yes"  ?
                     <SecondLevel subCategorySelected={subCategorySelected} 
                     detailSelected={detailSelected} secondLevelSelected={secondLevel} 
                     productselected={productselected}/> 
                   : null
                    } */}
                
                </div>
        </div>
    )
}
