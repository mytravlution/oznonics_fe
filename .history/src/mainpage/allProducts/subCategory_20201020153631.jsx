import React, { useState } from 'react'


export default function SubCategory({ subCategorySelected, detailSelected }) {

    const [isButtonClicked, setButtonClicked] = useState(true);
    const [selected, setSelected] = useState([]);

    // const onSubCategoryClicked = (event, index) => {
    //     setButtonValue(event.target.value);
    //     if(isButtonClicked[index]){
    //         delete setButtonClicked[index];
    //     }else{
    //         setButtonClicked[index](true);
    //     }
    // }

    const getSelectedItem= id =>()=>{
        selected.includes(id)? setSelected(selected.filter(x=>x !== id)): setSelected([...selected, id]);
        
    };
    const onRemove = ()
   
    let btn_class = isButtonClicked ? "clicked-button":"sub-category-inner";
    const arr1 = [];
    if ((detailSelected === "mechanical") && (subCategorySelected === "product drawing")) {
        arr1.push('3D Drawings', '2D Drawings');
    }
    else if ((detailSelected === "mechanical") && (subCategorySelected === "packaging")) {
        arr1.push('Outer Packing Data', 'Labels & Stickers');
    }
    else if ((detailSelected === "mechanical") && (subCategorySelected === "product assembly")) {
        arr1.push('Product Assembly', 'Packaging Assembly');
    }
    else if ((detailSelected === "mechanical") && ((subCategorySelected === "inline changes") || (subCategorySelected === "bom"))) {
        arr1.push('Main Product', 'Packaging');
    }
    else if ((detailSelected === "mechanical") && (subCategorySelected === "costing")) {
        arr1.push('Product Chassis', 'Packaging');
    }
    else if ((detailSelected === "electronics")) {
        arr1.push('Main Unit', 'Battery Pack & Charger');
    }
    else if ((detailSelected === "electrical") && ((subCategorySelected === "in-house designs") || (subCategorySelected === "externally sourced"))) {
        arr1.push('Front Control Panel', 'Coil & Transformer');
    }
    else if ((detailSelected === "electrical") && ((subCategorySelected === "new component dev") ||  (subCategorySelected === "inline changes") ||  (subCategorySelected === "costing")||(subCategorySelected === "bom")
    )) {
        arr1.push('Main Unit', 'Battery Pack & Charger');
    }
    else if ((detailSelected === "testing") && ((subCategorySelected === "testing  protocols") || (subCategorySelected === "testing setup"))) {
        arr1.push('Main Unit', 'Battery Pack','Battery Charger','Other Components');
    }
    else if ((detailSelected === "testing") && ((subCategorySelected === "test results") || (subCategorySelected === "field input"))) {
        arr1.push('Main Unit', 'Battery Pack & Charger','Other Components');
    }
    return (
        <div>
            <div className="prodDetail-outer">
                <p>{subCategorySelected} >> {detailSelected}</p>

                {arr1.map((cat, index) => {
                    return (
                        <div>
                            <button className={btn_class} value={cat} onClick={onSubCategoryClicked} index = {index}>{cat}</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
