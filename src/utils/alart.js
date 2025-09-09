import { Bounce } from "react-toastify";
import { toast } from "react-toastify";

export const alertToast = ({ text, type }) => {
  const toastType = toast[type] || toast.success;
  toastType(`🦄 ${text} `, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
