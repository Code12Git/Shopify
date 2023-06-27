import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { addProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct flex-4 ml-8">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm mt-4">
        <div className="addProductItem">
          <label className="text-gray-600 font-semibold mb-2">Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2"
          />
        </div>
        <div className="addProductItem">
          <label className="text-gray-600 font-semibold mb-2">Title</label>
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            className="p-2"
          />
        </div>
        <div className="addProductItem">
          <label className="text-gray-600 font-semibold mb-2">
            Description
          </label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
            className="p-2"
          />
        </div>
        <div className="addProductItem">
          <label className="text-gray-600 font-semibold mb-2">Price</label>
          <input
            name="price"
            type="number"
            placeholder="price"
            default="100"
            onChange={handleChange}
            className="p-2"
          />
        </div>
        <div className="addProductItem">
          <label className="text-gray-600 font-semibold mb-2">Categories</label>
          <input
            type="text"
            placeholder="jeans,skirts"
            onChange={handleCat}
            className="p-2"
          />
        </div>
        <div className="addProductItem">
          <label className="text-gray-600 font-semibold mb-2">Stock</label>
          <select name="inStock" onChange={handleChange} className="p-2">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button
          onClick={handleClick}
          className="addProductButton mt-4 px-4 py-2 bg-darkblue bg-blue-300 hover:bg-blue-500 font-semibold rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}
