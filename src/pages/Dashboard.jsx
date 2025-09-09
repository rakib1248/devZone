import { useSelector } from "react-redux";
import CreateProduct from "../components/products/CreateProduct";
import Loader from "../components/Loader";

const Dashboard = () => {
  const { products, isLoader } = useSelector((state) => state.product);

  return (
    <>
      {isLoader && <Loader />}

      <div className="bg-white container m-auto flex flex-wrap items-center gap-4 my-5">
        {products.map((item) => (
          <div key={item.id}>
            <CreateProduct
              title={item.title}
              img={item.image}
              price={item.sellPrice}
              id={item.id}
              publicId={item.public_id}
              all = {item}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
