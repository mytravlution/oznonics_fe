import React from 'react'
import './allProducts.scss';

export default function ProductDetail() {
    const category1 = ['Product Drawing', 'Packaging', 'Product Assembly'];
    return (
        <div>
         { category1.map(cat=>{
             return(
                 <div>{cat}</div>
             )
         })}
            <div className="category-inner">Product Drawing</div>
            <div  className="category-inner">Packaging</div>
            <div  className="category-inner">Product Assembly</div>
            <div  className="category-inner">inline changes</div>
            <div  className="category-inner">Costing</div>
            <div  className="category-inner">BOM</div>
        </div>
    )
}
