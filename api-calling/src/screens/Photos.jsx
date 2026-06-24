import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photos() {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState([]); // to store copy of main data
  const [search, setSearch] = useState("");

  const handleFetchPhotos = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    setStore(res.data.products);
    console.log("1. products fetched");
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setProducts(
      products.filter(
        (product, i) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  const handleCategoryFilter = (e) => {
    setProducts(store);
    console.log(products.length);
    if (e.target.value == "all") {
      setProducts(store);
    } else {
      setProducts(
        store.filter((product) => product.category == e.target.value),
      );
    }
  };

  const handlePriceFilter = (e) => {
    console.log(e.target.value);
    setProducts(
      store.filter((product) => product.price >= Number(e.target.value)),
    );
  };

  useEffect(() => {
    handleFetchPhotos();
  }, []);

  return (
    <>
      <div className="my-4">
        <div>
          <input onChange={getSearch} type="text" />{" "}
          <button onClick={handleSearch} className="mx-2 btn btn-primary">
            Search
          </button>
          <select onChange={handleCategoryFilter}>
            <option value={"all"}>All</option>
            <option value={"beauty"}>Beauty</option>
            <option value={"fragrances"}>Fragrances</option>
            <option value={"furniture"}>Furniture</option>
            <option value={"groceries"}>Groceries</option>
          </select>
          price
          <input onChange={handlePriceFilter} type="range" min={1} max={2500} />
          <button onClick={handleFetchPhotos} className="mx-2 btn btn-primary">
            Clear Filter
          </button>
        </div>
      </div>
      <div className="container row justify-content-evenly">
        {products.map((product, i) => {
          return (
            <div key={i} className="card" style={{ width: "18rem" }}>
              <img src={product.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">$ {product.price}</p>
                <p className="card-text">{product.category}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ecom - app
// api calling
// pagination
// searching = multy keyword searching
// dropdown filter
// slider filter - range filter
// lecture - 


// state management
// 1. useState
// 2. context api
// 3. redux toolkit - rtk