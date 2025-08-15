import axios from "axios";
import React from "react";
const URL = "https://ecommerce-backend-two-navy.vercel.app";
export default function AdminPortal() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    try {
      await axios.post(
        URL + "/admin/adminPortal/insertProduct", product,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    
    } catch (error) {
      console.error(error);
    }
  };
  const [product, setProduct] = React.useState({
    image: null,
    price: "",
    title: "",
    description: "",
    stock: "",
    category: "",
  });

  const handleChange = (e) => {
    // setProduct({ ...product, [e.target.name]: e.target.value });
    const { name, value, type, files } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold underline underline-offset-4">
            Admin Portal
          </h2>
          <form
            className="flex flex-col items-center justify-center mt-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 grid-flow-row p-4 gap-4">
              <input
                type="file"
                name="image"
                placeholder="Upload a pic"
                onChange={handleChange}
                className="p-2 text-lg rounded-md"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleChange}
                className="p-2 text-lg rounded-md"
              />
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={product.title}
                onChange={handleChange}
                className="p-2 text-lg rounded-md"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={product.description}
                onChange={handleChange}
                className="p-2 text-lg rounded-md"
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={product.stock}
                onChange={handleChange}
                className="p-2 text-lg rounded-md"
              />
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="p-2 text-lg rounded-md"
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home and Garden">Home and Garden</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-lg rounded-md w-40 bg-black text-gray-100"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
