import React from 'react'
import { Link } from 'react-router-dom';

const ProductPage = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <h3><Link to='/'>back to home</Link></h3>
            <h1>This is product with id: {id}</h1>
        </div>
    )
}

export default ProductPage
