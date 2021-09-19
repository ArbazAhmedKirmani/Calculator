import React from 'react';

/**
 * 
 * @param {Object} props Properties provided for button function 
 * @returns JSX element
 */
const Btn = (props) => {
    return (
        <button onClick={props.onClick} className={props.className} name={props.name} style={props.style}>
            {props.title}
        </button>
    );
};


export default Btn;