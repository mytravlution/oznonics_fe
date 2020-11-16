import React from 'react'

export default function secondLevel({detailSelected, subCategorySelected, secondLevelSelected}) {

    const arr1=[];

    if(secondLevelSelected)
    return (
        <div>
            <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p>
        </div>
    )
}

