import React, { useState } from 'react'

export default function secondLevel({ detailSelected, subCategorySelected, secondLevelSelected }) {
    const [buttonValue, setButtonValue] = useState('');
    const [isSubCategoryClicked,setCategoryClicked] = useState(false);

    const onSecondLeveClick=(event)=>{
        setButtonValue(event.traget.getAttribute("data-index"));

    }

    const arr1 = [];

    if ((secondLevelSelected === "3d drawings") ||
        (secondLevelSelected === "2d drawings") ||
        (secondLevelSelected === "product assembly") ||
        (secondLevelSelected === "product chassis") ||
        (secondLevelSelected === "main product")
    ) {
        arr1.push('Main Unit', 'Battery Charger', 'Battery Pack');
    }
    else if (secondLevelSelected === "battery pack & charger") {
        arr1.push('Battery Charger', 'Battery Pack');
    }
    else if (secondLevelSelected === "coil & transformer") {
        arr1.push('Coil', 'Transformer');
    }
    else if ((secondLevelSelected === "Main Unit") ||
        (secondLevelSelected === "Battery Pack") ||
        (secondLevelSelected === "Battery Charger")) {
        arr1.push('PCB', 'Unit');
    }
    return (
        <div>
            <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p>
            {arr1.map((cat, index) => {
                    return (
                        <div>
                            <button  data-index={index} className={buttonValue.toString() === index.toString() ? 'sub-category-format sub-category-clicked' : ' sub-category-format sub-category-unclick'} value={cat.toLowerCase()}>{cat}</button>
                        </div>
                    )
                })}
        </div>
    )
}

