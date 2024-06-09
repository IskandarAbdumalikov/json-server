const API_URL = "http://localhost:21753/products";

const ProductsCreate = ({ setReload }) => {
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
      e.target.reset();
    });
  };
  return (
    <div>
      <form onSubmit={handleCreate} action="">
        <input placeholder="Title" name="title" type="text" />
        <input placeholder="Url" name="image" type="text" />
        <input placeholder="Price" name="price" type="text" />
        <input placeholder="OldPrice" name="oldPrice" type="text" />
        <input placeholder="description" name="description" type="text" />
        <input placeholder="Brand" name="brand" type="text" />
        <input placeholder="Category" name="category" type="text" />
        <button>create</button>
      </form>
    </div>
  );
};

export default ProductsCreate;
