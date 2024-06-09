import React, { useEffect, useState } from "react";
import ProductsCreate from "../products/ProductsCreate";
import ProductsUpdate from "../products/ProductsUpdate";
const API_URL = "http://localhost:21753/products";

const Products = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(null);
  console.log(data);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [data, reload]);

  let handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setReload((p) => !p);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="products__wrapper">
        {data?.map((product) => (
          <div className="products__card" key={product.id}>
            <img src={product.image} alt="" />
            <div className="products__card__info">
              <h2>{product.title}</h2>
              <h1>{product.brand}</h1>
              <p>{product.description}</p>
              <div className="products__card__btns">
                <button onClick={() => handleDelete(product.id)}>delete</button>
                <button onClick={() => setEdit(product)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductsCreate setReload={setReload} />
      {edit ? <ProductsUpdate edit={edit} setEdit={setEdit} setReload={setReload} /> : <></>}
    </div>
  );
};

export default Products;
