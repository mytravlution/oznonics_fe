import React from 'react'

export default function secondLevel({detailSelected, subCategorySelected, secondLevelSelected}) {
    return (
        <div>
            <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p>
        </div>
    )
}

