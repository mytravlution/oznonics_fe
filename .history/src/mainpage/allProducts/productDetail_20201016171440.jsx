import React from 'react'
import './allProducts.scss';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ detailselected }) {
    let { id } = useParams();
    console.log({ id });


    const category1 = ['Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes', 'Costing', 'BOM'];
    return (
        <div>
              <h3>{detailselected}</h3>
              {if (chance.first() === 'John') { console.log('Got John');
} else { console.log('Got someone else'); } }
            else{}}
            {category1.map(cat => {
                return (
                    <div className="category-inner">{cat}</div>
                )
            })}

        </div>
    )
}
