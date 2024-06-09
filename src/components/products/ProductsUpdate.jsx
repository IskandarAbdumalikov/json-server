import React from "react";
const API_URL = "http://localhost:21753/products";
import "./module.scss";
import x from "../../assets/x.svg";

const ProductsUpdate = ({ edit, setReload, setEdit }) => {
  let handleEdit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/${edit.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(edit),
    }).then((res) => {
      console.log(res);
      setReload((p) => !p);
      setEdit(null);
      e.target.reset();
    });
  };
  return (
    <div className="edit__module">
      <form onSubmit={handleEdit} action="">
        <input
          value={edit.title}
          placeholder="Title"
          name="title"
          type="text"
          onChange={(e) => setEdit((p) => ({ ...p, title: e.target.value }))}
        />
        <input
          onChange={(e) => setEdit((p) => ({ ...p, image: e.target.value }))}
          value={edit.image}
          placeholder="Url"
          name="image"
          type="text"
        />
        <input
          onChange={(e) => setEdit((p) => ({ ...p, price: e.target.value }))}
          value={edit.price}
          placeholder="Price"
          name="price"
          type="number"
        />
        <input
          onChange={(e) => setEdit((p) => ({ ...p, oldPrice: e.target.value }))}
          value={edit.oldPrice}
          placeholder="OldPrice"
          name="oldPrice"
          type="number"
        />
        <input
          onChange={(e) =>
            setEdit((p) => ({ ...p, description: e.target.value }))
          }
          value={edit.description}
          placeholder="description"
          name="description"
          type="text"
        />
        <input
          onChange={(e) => setEdit((p) => ({ ...p, brand: e.target.value }))}
          value={edit.brand}
          placeholder="Brand"
          name="brand"
          type="text"
        />
        <input
          onChange={(e) => setEdit((p) => ({ ...p, category: e.target.value }))}
          value={edit.category}
          placeholder="Category"
          name="category"
          type="text"
        />
        <button>save</button>
      </form>
      <img onClick={()=>setEdit(null)} className="closer" src={x} alt="" />
    </div>
  );
};

export default ProductsUpdate;
