import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Products';
import Login from './Login';
import ProductDetail from './ProductDetail';


function App() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false)

  const fetchdata = async () => {
    setLoading(true)
    const response = await fetch('https://fakestoreapi.com/products')

    const data = await response.json()
    setProducts(data)

    setLoading(false)
  }
  useEffect(() => {
    fetchdata()
  }, []) // it will run only once that also onload of the page

  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Login />} />

        <Route path='/products' element={<Products test={products}/>} />

        <Route path='/products/:id' element={<ProductDetail product={products}/>} />

      </Routes>


    </BrowserRouter>
  )
}

export default App
