import React, { useEffect, useState } from 'react'
import './App.css';
import ProductList from './component/productList';
import ProductFilter from './component/Filters';

function App() {

  const [productList, setProductList] = useState([])
  const [finalProductList, setFinalProductList] = useState([])
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    if (searchText) {
      const tempData = finalProductList.filter((item) => { return item.title.toLowerCase().includes(searchText.toLowerCase()) })
      setProductList(tempData)
    } else if (selectedCategory) {
      console.log("selectedCategory",selectedCategory);
      const tempData = finalProductList.filter((item) => {
        return item.category.toLowerCase().includes(selectedCategory.toLowerCase())
      })
      setProductList(tempData)
    } else {
      fetchProductData()
    }
  }, [searchText, selectedCategory])

  const fetchProductData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProductList(json)
        setFinalProductList(json)
      })
  }

  return (
    <div className="App">
      <div className="d-flex m-30">
        <div className="w-30">
          <ProductFilter
            searchText={searchText}
            selectedCategory={selectedCategory}
            setSearchText={setSearchText}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="w-70">
          <ProductList productList={productList} />
        </div>
      </div>
    </div>
  );
}

export default App;
