import React from 'react'

export default function mobiletest1({arr1}) {
    return (
        <div>
             {arr1.map((cat, index) => {
                      if(category === "All"){
                        return (
                            <div>
                                <button data-index={index} 
                                className={ buttonValue.toString() === index.toString() ? 'detail-button-selected':'detail-button'} 
                                value={cat.toLowerCase()}  
                                onClick={onProductClicked}>{cat}</button>
                            </div>
                        )   
                      }
                      else if(category.toLowerCase() === cat.toLowerCase()){
                        return (
                            <div>
                                <button data-index={index} 
                                className={ buttonValue.toString() === index.toString() ? 'detail-button-selected':'detail-button'} 
                                value={cat.toLowerCase()}  
                                onClick={onProductClicked}>{cat}</button>
                            </div>
                        )
                    }else{
                        return (
                       <div> </div>
                        )
                    }
                    })}
        </div>
    )
}
