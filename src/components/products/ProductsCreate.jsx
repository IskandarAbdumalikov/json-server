const API_URL = "http://localhost:21753/products";
import "./module.scss";
import x from "../../assets/x.svg";

const ProductsCreate = ({ setReload, setShowCreate }) => {
  let handleCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData.entries());
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);
      setReload((p) => !p);
      setShowCreate(false);
      e.target.reset();
    });
  };
  return (
    <div className="create__module">
      <form className="create__module" onSubmit={handleCreate} action="">
        <input required placeholder="Title" name="title" type="text" />
        <input
          required
          placeholder="Description"
          name="description"
          type="text"
        />
        <input required placeholder="Brand" name="brand" type="text" />
        <input required placeholder="Url" name="image" type="text" />
        <input required placeholder="Price" name="price" type="number" />
        <input required placeholder="Old Price" name="oldPrice" type="number" />
        <input required placeholder="Category" name="category" type="text" />
        <button>create</button>
      </form>
    </div>
  );
};

export default ProductsCreate;
