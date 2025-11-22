import React, { useEffect, useState } from 'react'

const App = () => {

  const [sort, setSort] = React.useState("")
  const [search, Search] = React.useState("")
  const [category, setCategory] = React.useState("All")

  const categories = [
    "All", "laptop", "Mobile", "Headphones"
  ]

  const [products, setProducts] = useState([
    { name: "iPhone 15", price: 0, category: "Mobile", image: "" },
    { name: "Samsung S24", price: 0, category: "Mobile", image: "" },
    { name: "Google Pixel 9", price: 0, category: "Mobile", image: "" },

    { name: "MacBook Air", price: 0, category: "Laptop", image: "" },
    { name: "Dell XPS", price: 0, category: "Laptop", image: "" },

    { name: "Sony WH-1000XM5", price: 0, category: "Headphones", image: "" },
    { name: "AirPods Pro 2", price: 0, category: "Headphones", image: "" },
    { name: "JBL Tune 760NC", price: 0, category: "Headphones", image: "" },

    { name: "iPad Pro", price: 0, category: "Tablet", image: "" },
    { name: "Samsung Galaxy Tab S9", price: 0, category: "Tablet", image: "" },
    { name: "Lenovo Tab P12", price: 0, category: "Tablet", image: "" },

  ]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        // mobile data 
        const response1 = await fetch("https://dummyjson.com/products/category/smartphones")
        const fetchMobiles = await response1.json();

        // laptop data 
        const response2 = await fetch("https://dummyjson.com/products/category/laptops")
        const fetchLaptops = await response2.json()

        // headPhones data 
        const response3 = await fetch("https://dummyjson.com/products/category/mobile-accessories")
        const fetchHeadPhones = await response3.json()

        setProducts(prevProducts => {
          return prevProducts.map((product, index) => {
            if (product.category === "Mobile") {
              return {
                ...product,
                price: fetchMobiles.products[index]?.price || "",
                image: fetchMobiles.products[index]?.thumbnail || ""
              };
            } else if (product.category === "Laptop") {
              return {
                ...product,
                price: fetchLaptops.products[index]?.price || "",
                image: fetchLaptops.products[index]?.thumbnail || ""
              }
            }else {
              return{
                ...product,
                price: fetchHeadPhones.products[index]?.price || "",
                image: fetchHeadPhones.products[index]?.thumbnail || ""
              }
            }
            
            return product;
          });
        });

      } catch (error) {

      }
    }


    fetchData()

  }, []);

  useEffect(() => {
    for (let i = 0; i < products.length; i++)
      console.log(products[i].image)
  }, [products])

  const handleClick = ((e) => {
    e.preventDefault()
    if (e.target.value === "laptop") {
      console.log("hello")
    } else if (e.target.value === "All") {
      console.log("all")
    }
  })
  // *************************************************************************************
  return (
    <div>
      <nav className='flex flex-wrap justify-around bg-gray-100 p-4'>
        <div className='w-sm'>
          <input type="text"
            placeholder='Search Product'
            // onChange={() =>}
            className='px-4 py-2 rounded-2xl border-1'
          />
        </div>
        <div className='flex justify-around w-sm gap-3'>
          {
            categories.map((cat) =>
              <button key={cat}
                onClick={handleClick}
                value={cat}
                className='bg-gray-300 hover:bg-gray-400 cursor-pointer px-6 rounded-2xl text-gray-800'
              >{cat}</button>
            )
          }
        </div>
        <div>
          <select onChange={(e) => {
            setSort(e.target.value)
          }} className=' px-4 py-2 rounded-2xl border-1'>
            <option value="">Sort by price</option>
            <option value="high">High →Low</option>
            <option value="low">Low → High</option>
          </select>
        </div>
      </nav>

      {/* hero section  */}
      <div className='h-screen flex flex-wrap justify-center items-center gap-8'>

        {products.map((p, index) => (
          <div className='border-1 h-90 p-4 flex flex-col items-center gap-3' key={index}>
            <img src={p.image} alt={p.name} width="200" />
            <h3>{p.name}</h3>
            <p>Price: ${p.price}</p>
            <p>Category: {p.category}</p>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default App

