import React from 'react'

export default function secondLevel({detailSelected, subCategorySelected, secondLevelSelected}) {

    const arr1=[];

    if(detailSelected==="mechanical")
    {
        arr1.push('Main Unit')
    }
    return (
        <div>
            <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p>
        </div>
    )
}

