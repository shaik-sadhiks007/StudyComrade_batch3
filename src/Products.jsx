import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ test }) {

    const products = test


    const [inputSearch, setInputSearch] = useState('')

    function handleSearch(e) {

        setInputSearch(e.target.value)

    }


    const filteredProducts = products.filter(each => each.title.toLowerCase().includes(inputSearch.toLowerCase()))


    console.log(filteredProducts, 'filter')

    return (

        <>
            <div className="container">
                <h1 className="text-center">Products</h1>
                <div className="text-center my-5">
                    <input type="text" placeholder="Enter the product title" onChange={(e) => handleSearch(e)} />
                </div>


                <div className="row">
                    {

                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <div key={index} className="col-3 mb-4">
                                    <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                                        <Link to={`/products/${product.id}`}>
                                            <div>
                                                <img src={product.image} style={{ width: '200px', height: '200px' }} alt={product.title} />
                                            </div>
                                        </Link>
                                        <Link to={`/products/${product.id}`}>

                                            {product.title.length > 25 ? `${product.title.substring(0, 25)}` : product.title}

                                        </Link>

                                        <h3>${product.price}</h3>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                            <button className="btn btn-warning" style={{ flex: '1', marginRight: '5px' }}>Add to Cart</button>
                                            <button className="btn btn-success" style={{ flex: '1' }}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (<h1> no products available</h1>)
                   
                    }
                </div>
            </div>

        </>

    )
}

export default Products
