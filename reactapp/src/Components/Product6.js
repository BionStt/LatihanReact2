import React from "react";

const Product6 =(props) =>{
    return(
        React.createElement('div',{id:'test'},
        React.createElement('b',null,
        'The ' + props.name + ' of values are ' + 125*3))
    );
}

export default Product6;