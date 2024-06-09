import React, { useEffect, useState } from "react";
import ProductsCreate from "../products/ProductsCreate";
import ProductsUpdate from "../products/ProductsUpdate";
const API_URL = "http://localhost:21753/products";
import "./products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  console.log(data);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [data, reload]);

  let handleDelete = (id) => {
    if (confirm("are you sure")) {
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
    }
  };

  let handleCloser = () => {
    setEdit(null);
    setShowCreate(false);
  };

  return (
    <div className="products__wrapper">
      <div className="products__header">
        <h2>Products</h2>
        <button className="create-btn" onClick={() => setShowCreate(true)}>
          Create product
        </button>
      </div>
      <div className="products">
        {data?.map((product) => (
          <div className="products__card" key={product.id}>
            <Link>
              <img src={product.image} alt="" />
            </Link>
            <div className="products__card__info">
              <h2>{product.title}</h2>
              <h1>{product.brand}</h1>
              <p title={product.description}>{product.description}</p>
              <div className="products__card__info__price">
                {product.oldPrice > product.price ? (
                  <del className="line__through">{product.oldPrice} USD</del>
                ) : (
                  <del
                    style={{
                      display: "none",
                    }}
                    className="line__through"
                  >
                    {product.oldPrice} USD
                  </del>
                )}
                <h2>{product.price} USD</h2>
              </div>
              <div className="products__card__btns">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  delete
                </button>
                <button className="edit-btn" onClick={() => setEdit(product)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {edit || showCreate ? (
        <div onClick={handleCloser} className="overlay"></div>
      ) : (
        <></>
      )}
      {showCreate ? (
        <ProductsCreate setShowCreate={setShowCreate} setReload={setReload} />
      ) : (
        <></>
      )}
      {edit ? (
        <ProductsUpdate edit={edit} setEdit={setEdit} setReload={setReload} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Products;
