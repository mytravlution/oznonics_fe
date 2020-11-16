import React from 'react'

export default function secondLevel({detailSelected, subCategorySelected, secondLevelSelected}) {

    const arr1=[];

    if((secondLevelSelected === "3d drawings")||
    (secondLevelSelected === "2d drawings") ||
    (secondLevelSelected==="Product assembly"))
    {

    }
    return (
        <div>
            <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p>
        </div>
    )
}

