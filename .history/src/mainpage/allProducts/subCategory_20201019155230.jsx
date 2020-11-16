import React from 'react'

export default function subCategory({subCategorySelected}) {

    const arr1 = [];

    if(subCategorySelected==="")
    return (
        <div>
            <div className="prodDetail-outer">
            <p>{subCategorySelected}</p>
            </div>

        </div>
    )
}
