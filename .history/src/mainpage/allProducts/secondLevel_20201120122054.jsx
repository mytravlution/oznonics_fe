import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

export default function SecondLevel({ detailSelected, subCategorySelected, secondLevelSelected,productselected }) {
    const [buttonValue, setButtonValue] = useState('');
    const [isLevelClicked,setLevelClicked] = useState(false);

    const ext = productselected+"_"+detailSelected+"_"+subCategorySelected+"_"+secondLevelSelected;
    const onSecondLeveClick = (event) => {
        setButtonValue(event.target.getAttribute("data-index"));
        setLevelClicked(true);

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
    }else{}
    return (
        <div>
            {arr1.length !== 0 && <div className="arrow-right">&#x3e;</div>}
            <div className="second-level-outer">
                {/* <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p> */}
                {arr1.map((cat, index) => {
                    return (
                        <div>
                            <button data-index={index} 
                            className={buttonValue.toString() === index.toString() ? 'sub-category-format sub-category-clicked' : ' sub-category-format sub-category-unclick'} 
                            value={cat.toLowerCase()} onClick={onSecondLeveClick} title="Click to add info">{cat}</button>
                        </div>
                    )
                })}
            </div>

            <div>
               
                        {isLevelClicked && <Redirect to={`/addImage/${ext}` }/> }
                </div>

        </div>
    )
}

