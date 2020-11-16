import React from 'react'

export default function subCategory({subCategorySelected}) {
    return (
        <div className="sub-category-outer">
            <div className="prodDetail-outer">
            <p>{subCategorySelected}</p>
            </div>

        </div>
    )
}
