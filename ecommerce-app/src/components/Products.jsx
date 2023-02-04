import React, { useContext } from 'react'
import Product from './Product'
import './products.css'
import { MyContext } from '../App'
import loader from './images/loader.gif'
function Products() {
  const { displayData, loading } = useContext(MyContext)
  return (
    <div className='productsContainer'>
      <h1 className='productsHeading'>Products</h1>
      <div className='catalogue'>
        {/* show loader till data is not fetched */}
        {loading ? (
          <>
            <img className='loaderImg' src={loader} alt='loading..' />
          </>
        ) : (
          displayData.map((item) => <Product key={item.id} item={item} />)
        )}
      </div>
    </div>
  )
}

export default Products
