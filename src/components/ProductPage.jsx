import React, { useEffect, useState } from 'react'

const ProductPage = () => {

  const [sort, setSort] = useState("")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const categories = ["All", "Laptop", "Mobile", "Headphone"]

  const [products, setProducts] = useState([
    { name: "iPhone 15", price: 0, category: "Mobile", image: "" },
    { name: "Samsung S24", price: 0, category: "Mobile", image: "" },
    { name: "Google Pixel 9", price: 0, category: "Mobile", image: "" },

    { name: "MacBook Air", price: 0, category: "Laptop", image: "" },
    { name: "Dell XPS", price: 0, category: "Laptop", image: "" },

    { name: "Sony WH-1000XM5", price: 0, category: "Headphone", image: "" },
    { name: "AirPods Pro 2", price: 0, category: "Headphone", image: "" },
    { name: "JBL Tune 760NC", price: 0, category: "Headphone", image: "" },
  ]);

  // BACKUP ORIGINAL LIST
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const mobiles = await fetch("https://dummyjson.com/products/category/smartphones").then(res => res.json());
        const laptops = await fetch("https://dummyjson.com/products/category/laptops").then(res => res.json());
        const headphones = await fetch("https://dummyjson.com/products/category/mobile-accessories").then(res => res.json());

        setProducts(prevProducts => {
          const updated = prevProducts.map((product, index) => {

            if (product.category === "Mobile") {
              return {
                ...product,
                price: mobiles.products[index]?.price || "",
                image: mobiles.products[index]?.thumbnail || ""
              };
            }

            if (product.category === "Laptop") {
              return {
                ...product,
                price: laptops.products[index]?.price || "",
                image: laptops.products[index]?.thumbnail || ""
              };
            }

            return {
              ...product,
              price: headphones.products[index]?.price || "",
              image: headphones.products[index]?.thumbnail || ""
            };
          });

          // ORIGINAL LIST COPY
          setFilterProduct(updated);

          return updated;
        });

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, []);

  // CATEGORY FILTER — FIXED
  const handleClick = (e) => {
    const value = e.target.value;

    if (value === "All") {
      setProducts(filterProduct);
    } else {
      setProducts(filterProduct.filter(p => p.category === value));
    }
  };

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)
    if (value === "") {
      setProducts(filterProduct);
    } else {
      setProducts(
        filterProduct.filter((p) =>
          p.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }

  const handleSort = (e) => {
    setSort(e.target.value)
    if(sort === "high"){
      products.sort((a, b) => a.price - b.price)
    }else {
      products.sort((a, b) => b.price - a.price)
    }
  }


  return (
    <div>
      <nav className='flex flex-wrap justify-around bg-gray-100 p-4'>
        <div className='w-60'>
        

          <input
            value={search}
            onChange={(handleChange)}
            type="text"
            placeholder='Search Product by name'
            className='px-4 py-2 w-60 bg-white border-0 rounded-xl shadow-lg outline-none'
          />
        </div>

        <div className='flex gap-3'>
          {categories.map((cat) =>
            <button key={cat}
              onClick={handleClick}
              value={cat}
              className='bg-blue-500 text-white font-semibold px-6 rounded-xl hover:bg-blue-600 cursor-pointer'
            >
              {cat}
            </button>
          )}
        </div>

        <div className="w-48">
          <select
            onChange={handleSort}
            className="
            w-full
            px-4 py-3
            bg-white
            border border-gray-300
            rounded-2xl
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-blue-400
            focus:border-blue-400
            transition
            duration-200
            ease-in-out
            cursor-pointer
            text-gray-700
          "
          >
            <option value="">Sort by price</option>
            <option value="high">High → Low</option>
            <option value="low">Low → High</option>
          </select>
        </div>

      </nav>

      {/* Product Section */}
      <div className='flex flex-wrap justify-center gap-8 p-6'>
        {products.map((p, index) => (
          <div
            key={index}
            className="
            w-64 
            bg-white 
            border-0 
            rounded-3xl 
            shadow-lg 
            p-6 
            flex flex-col items-center gap-4
            transition-transform duration-300 ease-in-out
            hover:-translate-y-4 
            hover:shadow-2xl
            "
          >
            <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-2xl">
              <img
                src={p.image}
                alt={p.name}
                className="object-contain h-full w-full"
              />
            </div>

            <h3 className="text-lg font-bold text-gray-800 text-center">{p.name}</h3>
            <p className="text-gray-600 font-semibold">Price: ${p.price}</p>
            <p className="text-gray-500 text-sm">{p.category}</p>

            <button className="mt-2 w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>

        ))}
      </div>
    </div>
  )
}

export default ProductPage
