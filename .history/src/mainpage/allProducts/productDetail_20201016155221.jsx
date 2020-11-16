import React from 'react'
import './allProducts.scss';

export default function ProductDetail() {
    const category1 = ['Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes','Costing', 'BOM'];
    return (
        <div>
         { category1.map(cat=>{
             return(
                 <div className="category-inner">{cat}</div>
             )
         })}
           
        </div>
    )
}
