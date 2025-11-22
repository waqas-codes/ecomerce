import React, { useEffect, useState } from 'react'

const App = () => {

  const [sort, setSort] = React.useState("")
  const [search, Search] = React.useState("")
  const [category, setCategory] = React.useState("All")

  const [products, setProducts] = useState([
    { name: "iPhone 15", price: 1500, category: "Mobile", image: "" },
    { name: "Samsung S24", price: 1300, category: "Mobile", image: "" },
    { name: "Google Pixel 9", price: 1200, category: "Mobile", image: "" },

    { name: "MacBook Air", price: 2200, category: "Laptop", image: "" },
    { name: "Dell XPS", price: 2500, category: "Laptop", image: "" },
    { name: "HP Spectre", price: 2100, category: "Laptop", image: "" },

    // ... baaki products
  ]);

  useEffect(() => {
    // Fetch mobiles from DummyJSON API
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => {

        const mobileImages = data.products.map((p) => p.thumbnail); 

        // Update products array: mobile category ke items ke liye images set karo
        setProducts((prevProducts) =>
          prevProducts.map((p, i) => {
            if (p.category === "Mobile" && mobileImages[i]) {
              return { ...p, image: mobileImages[i] };
            }
            return p;
          })
        );
      })
      .catch((err) => console.error(err));
  }, []);
const categories = [
  "All", "Laptop", "Mobile", "Headphones"
]
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
      <div className='h-screen flex flex-wrap justify-center items-center gap8'>
          <div>
            <img src={products[0].image} alt="" />
            <h3>{products[0].name}</h3>
            <p></p>
            <p></p>
          </div>
      </div>
    </div>
  )
}

export default App