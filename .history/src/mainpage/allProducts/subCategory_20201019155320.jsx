import React from 'react'

export default function subCategory({subCategorySelected, detailSelected}) {

    const arr1 = [];

    if(subCategorySelected===""){

    }
    return (
        <div>
            <div className="prodDetail-outer">
    <p>{subCategorySelected}  and {detailSelected}</p>
            </div>

        </div>
    )
}