import React from "react";
import { useDispatch } from "react-redux";
import {
  DeleteProduct,
  updateProduct,
} from "../../redux/Feature/Products/ProductApiSlice";
import { BiEdit, BiStar, BiTrash } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { useState } from "react";
import Modal from "../Modal";
import { alertToast } from "../../utils/alart";

const CreateProduct = ({ title, img, price, id, publicId, all }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(DeleteProduct({ id, publicId }));
  };
  const [isModal, setIsModal] = useState(false);
  // const { products } = useSelector((state) => state.product);
  const [product, setProduct] = useState(all);

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

    if (!product.title.trim()) return alertToast({ text: "Product Name is required", type: "error" });
    if (!product.sellPrice)
      return alertToast({ text: "Sell Price is required", type: "error" });
    if (!product.dec.trim())
      return alertToast({ text: "Description Empty", type: "error" });
    // sent data server
    dispatch(updateProduct(product));

    setProduct({
      title: all.title,

      sellPrice: all.sellPrice,
      offerPrice: all.offerPrice,
      dec: all.dec,
    });
    setIsModal(false);
  };

  // useEffect(() => {
  //   const data = products.find((item) => item.id === id);
  //   if (data) {
  //     setProduct(data);
  //   } else if (!data) {
  //     setProduct({});
  //   }
  // }, [id, products]);

  return (
    <>
      <div className="group bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden w-[320px] border border-border/50">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            className="h-[200px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={img}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-1 group-hover:text-[#3377FF] transition-colors duration-200">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <IoIosStar className="w-5 h-5 fill-accent text-accent text-[#FABD23]" />
              <span className="text-sm font-bold">4.8</span>
            </div>
            <span className="text-sm text-muted-foreground">
              (<span className="font-medium">1.2k</span>)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#09642a]">৳{price}</span>
            <span className="text-sm font-medium text-[#096415]">BDT</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => {
                setIsModal(true);
              }}
              className="flex-1 bg-[#3377FF] text-white hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 group/btn">
              <BiEdit className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
              Edit Product
            </button>
            <button
              onClick={onDelete}
              className="bg-[#EF4444] text-white hover:bg-destructive-hover text-destructive-foreground px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center group/del">
              <BiTrash className="w-4 h-4 group-hover/del:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        title="Update a Product">
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
            <p className="absolute bottom-8 z-10 bg-white left-2">Sell Price</p>
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
          <input
            type="text"
            name="id"
            placeholder="Enter product description"
            value={product.id}
            onChange={handleChangh}
            className=""
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 cursor-pointer hover:bg-blue-400">
            Update Product
          </button>
        </form>
      </Modal>
    </>
  );
};

export default CreateProduct;
