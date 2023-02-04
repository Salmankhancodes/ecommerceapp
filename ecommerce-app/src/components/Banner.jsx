import React, { useContext } from 'react'
import { MyContext } from '../App'
import './banner.css'
function Banner() {
  const { allCategories, setSelectedCategory, searchText, setSearchText } =
    useContext(MyContext)
  return (
    <div className='bannerContainer'>
      <select
        className='categoryBox'
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value=''>All</option>
        {allCategories.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>

      <input
        placeholder='Search products here'
        className='searchBox'
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default Banner
