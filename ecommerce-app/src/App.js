import React, { useState, useEffect } from 'react'
import Banner from './components/Banner'
import Products from './components/Products'
export const MyContext = React.createContext()

function App() {
  const [products, setProducts] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchdata = async () => {
      const productData = await fetch('https://fakestoreapi.com/products') // fetching products data
      const categoriesData = await fetch(
        'https://fakestoreapi.com/products/categories' // fetching all categories
      )
      const productDataJson = await productData.json()
      let categoriesDataJson = await categoriesData.json()
      setProducts(productDataJson)
      setAllCategories(categoriesDataJson)
      setLoading(false)
    }
    fetchdata()
  }, [])
  // filter countries by category if category is selected
  const filterByCategory =
    selectedCategory === ''
      ? products
      : products.filter((item) => item.category === selectedCategory)
  // if searchText field is not empty filter products by searchText (case in-sensitive matching)
  const displayData =
    searchText === ''
      ? filterByCategory
      : filterByCategory.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
  const contextValue = {
    displayData,
    allCategories,
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    loading,
  }
  return (
    <>
      <MyContext.Provider value={contextValue}>
        <Banner />
        <Products />
      </MyContext.Provider>
    </>
  )
}

export default App
