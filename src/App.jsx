import React from 'react'

const App = () => {

  const [category, setCategory] = React.useState("All")
  const products = [
  { name: "iPhone 15", price: 1500, category: "Mobile", image: "https://via.placeholder.com/300x200?text=iPhone+15" },
  { name: "Samsung S24", price: 1300, category: "Mobile", image: "https://via.placeholder.com/300x200?text=Samsung+S24" },
  { name: "Google Pixel 9", price: 1200, category: "Mobile", image: "https://via.placeholder.com/300x200?text=Pixel+9" },

  { name: "MacBook Air", price: 2200, category: "Laptop", image: "https://via.placeholder.com/300x200?text=MacBook+Air" },
  { name: "Dell XPS", price: 2500, category: "Laptop", image: "https://via.placeholder.com/300x200?text=Dell+XPS" },
  { name: "HP Spectre", price: 2100, category: "Laptop", image: "https://via.placeholder.com/300x200?text=HP+Spectre" },

  { name: "Sony WH-1000XM5", price: 400, category: "Headphones", image: "https://via.placeholder.com/300x200?text=Sony+XM5" },
  { name: "AirPods Pro 2", price: 300, category: "Headphones", image: "https://via.placeholder.com/300x200?text=AirPods+Pro+2" },
  { name: "JBL Tune 760NC", price: 150, category: "Headphones", image: "https://via.placeholder.com/300x200?text=JBL+760NC" },

  { name: "iPad Pro", price: 1800, category: "Tablet", image: "https://via.placeholder.com/300x200?text=iPad+Pro" },
  { name: "Samsung Galaxy Tab S9", price: 1400, category: "Tablet", image: "https://via.placeholder.com/300x200?text=Galaxy+Tab+S9" },
  { name: "Lenovo Tab P12", price: 900, category: "Tablet", image: "https://via.placeholder.com/300x200?text=Lenovo+Tab+P12" },

  { name: "Apple Watch Series 9", price: 600, category: "Smartwatch", image: "https://via.placeholder.com/300x200?text=Apple+Watch+9" },
  { name: "Samsung Galaxy Watch 6", price: 450, category: "Smartwatch", image: "https://via.placeholder.com/300x200?text=Galaxy+Watch+6" },
  { name: "Fitbit Versa 4", price: 250, category: "Smartwatch", image: "https://via.placeholder.com/300x200?text=Fitbit+Versa+4" }
]

const categories = [
  "All", "Laptop", "Mobile", "Headphones"
]

  return (
    <div>
      <nav className='flex justify-around bg-gray-100 p-4'>
        <div className='w-sm'>
          <input type="text" 
          placeholder='Search items'
          // onChange={() =>}
          className='px-4 py-2 rounded-2xl'
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
      </nav>
    </div>
  )
}

export default App