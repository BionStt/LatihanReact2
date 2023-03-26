import React from 'react';

const Product4 = () => {
    return(
        React.createElement('div',
                            {id:'test'},
                            React.createElement('b',null,
                            '<b>The product of values are {3*12}</b>')
                            )
    );
}

export default Product4;