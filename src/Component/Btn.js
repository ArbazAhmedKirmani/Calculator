import React from 'react';


const Btn = (props) => {
    return (
        <button onClick={props.onClick} className={props.className} name={props.name} style={props.style}>
            {props.title}
        </button>
    );
};


export default Btn;