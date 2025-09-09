import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/Feature/Products/ProductApiSlice";
import { useRef } from "react";
import { cloudImgUpload } from "../utils/cloudinary";
import Loader from "./Loader";
import { alertToast } from "../utils/alart";

const Header = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoder, setIsLoder] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [product, setProduct] = useState({
    title: "",

    sellPrice: "",
    offerPrice: "",
    dec: "",
  });

  // const handleChangh = (e) => {
  //   const { name, value } = e.target;
  //   setProduct((prev) => ({ ...prev, [name]: value }));
  // };
  const handleChangh = (e) => {
    const { name, value } = e.target;

    if (name === "sellPrice" || name === "offerPrice") {
      // শুধু digit allow
      if (/^\d*$/.test(value)) {
        setProduct((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  // form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoder(true);
    // validation
    const { title, sellPrice, dec } = product;
    if (!title.trim())
      return alertToast({ text: "Product Name is required", type: "error" });
    if (!sellPrice)
      return alertToast({ text: "Sell Price is required", type: "error" });
    if (!dec.trim()) alertToast({ text: "Description Empty", type: "error" });
    if (!image)
      return alertToast({ text: "Product Image  Empty", type: "error" });

    // sent data server

    const img = await cloudImgUpload({
      file: image,
      cloudName: "drpihbzih",
      preset: "test_upload",
    });

    dispatch(
      createProduct({
        ...product,
        image: img.secure_url,
        public_id: img.public_id,
      })
    );

    setProduct({
      title: "",

      sellPrice: "",
      offerPrice: "",
      dec: "",
    });
    setIsModal(false);
    fileInputRef.current.value = null;
    setImage(null);
    setIsLoder(false);
  };

  return (
    <header className="bg-blue-600 text-white ">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <button
          onClick={() => {
            setIsModal(true);
          }}
          className="text-xl font-bold cursor-pointer border px-5 py-2 rounded-2xl">
          Create Product
        </button>

        {/* product create Form */}
        <div className="text-black">
          <Modal
            isOpen={isModal}
            onClose={() => setIsModal(false)}
            title="Create a Product">
            <form
              onSubmit={handleFormSubmit}
              className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
              <div className="relative my-5">
                <p className="absolute bottom-8 z-10 bg-white left-2">Name</p>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter name"
                  value={product.title}
                  onChange={handleChangh}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="relative mb-5">
                <p className="absolute bottom-8 z-10 bg-white left-2">
                  image url
                </p>
                <input
                  type="file"
                  // name="image"
                  ref={fileInputRef}
                  onChange={(e) => setImage(e.target.files[0])}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="relative mb-5">
                <p className="absolute bottom-8 z-10 bg-white left-2">
                  Sell Price
                </p>
                <input
                  type="text"
                  name="sellPrice"
                  placeholder="Enter price"
                  value={product.sellPrice}
                  onChange={handleChangh}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="relative mb-5">
                <p className="absolute top-[-12px] z-10 bg-white left-2">
                  Offer Price
                </p>
                <input
                  type="text"
                  name="offerPrice"
                  placeholder="Enter Offer Price"
                  value={product.offerPrice}
                  onChange={handleChangh}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="relative mb-5">
                <p className="absolute top-[-12px] z-10 bg-white left-2">
                  Description
                </p>
                <input
                  type="text"
                  name="dec"
                  placeholder="Enter product description"
                  value={product.dec}
                  onChange={handleChangh}
                  className="border p-2 rounded w-full h-24"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded py-2 cursor-pointer hover:bg-blue-400">
                Crete Product
              </button>
            </form>
          </Modal>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            About
          </a>
          <a href="#" className="hover:text-gray-200">
            Products
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-gray-200">
            Home
          </a>
          <a href="#" className="block hover:text-gray-200">
            About
          </a>
          <a href="#" className="block hover:text-gray-200">
            Products
          </a>
          <a href="#" className="block hover:text-gray-200">
            Contact
          </a>
        </div>
      )}

      {isLoder && <Loader />}
    </header>
  );
};

export default Header;
