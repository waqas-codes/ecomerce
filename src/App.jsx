import React, { useEffect, useState } from 'react'

const App = () => {

  const [sort, setSort] = React.useState("")
  const [search, Search] = React.useState("")
  const [category, setCategory] = React.useState("All")

  const categories = [
    "All", "laptop", "Mobile", "Headphones"
  ]

  const [products, setProducts] = useState([
    { name: "iPhone 15", price: 1500, category: "Mobile", image: "" },
    { name: "Samsung S24", price: 1300, category: "Mobile", image: "" },
    { name: "Google Pixel 9", price: 1200, category: "Mobile", image: "" },

    { name: "MacBook Air", price: 2200, category: "Laptop", image: "" },
    { name: "Dell XPS", price: 2500, category: "Laptop", image: "" },
    { name: "HP Spectre", price: 2100, category: "Laptop", image: "" },

    { name: "Sony WH-1000XM5", price: 400, category: "Headphones", image: "" },
    { name: "AirPods Pro 2", price: 300, category: "Headphones", image: "" },
    { name: "JBL Tune 760NC", price: 150, category: "Headphones", image: "" },

    { name: "iPad Pro", price: 1800, category: "Tablet", image: "" },
    { name: "Samsung Galaxy Tab S9", price: 1400, category: "Tablet", image: "" },
    { name: "Lenovo Tab P12", price: 900, category: "Tablet", image: "" },

  ]);

  useEffect(() => {
    const fetchMobiles = fetch("https://dummyjson.com/products/category/smartphones").then(res => res.json());
    // const fetchLaptops = fetch("https://dummyjson.com/products/category/laptops").then((res) => res.json());
    fetchMobiles.then(data => {
      console.log(data)
    })
    console.log(fetchMobiles)
      // .then((res) => res.json())
      // .then((data) => {

      //   const mobileImages = data.products.map((p) => p.thumbnail);

      //   let mobileIndex = 0;

      //   setProducts((prev) =>
      //     prev.map((p) => {
      //       if (p.category === "Mobile") {
      //         const newImage = mobileImages[mobileIndex];
      //         mobileIndex++;
      //         return { ...p, image: newImage };
      //       }
      //       return p;

      //     })
      //   );
      // });
  }, []);

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
          <div className='border-1 h-60 p-4 flex flex-col items-center gap-3' key={index}>
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