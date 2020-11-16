import React from 'react'

export default function secondLevel({detailSelected, subCategorySelected, secondLevelSelected}) {

    const arr1=[];

    if(secondLevelSelected === "3D drawings")
    return (
        <div>
            <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p>
        </div>
    )
}

