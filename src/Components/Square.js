import React from 'react';

const Square = ({win, value, onClick}) => {
    let style = null;
    if (win){
        style = `win ${value}`;
    }
    else{
        style = value ? `squares ${value}`: 'squares';
    }
    
    return(        
        <button className={ style } onClick={ onClick }>
            { value }
        </button>        
    );
}

export default Square;