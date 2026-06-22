import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photos() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handleFetchPhotos = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
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
