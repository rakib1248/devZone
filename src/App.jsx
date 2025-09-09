import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import router from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allProducts } from "./redux/Feature/Products/ProductApiSlice";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />

      <Header />
    

      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
