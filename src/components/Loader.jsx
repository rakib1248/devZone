const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999999] flex justify-center items-center  opacity-85 bg-gray-100">
      <div className="flex flex-col items-center">
        <img className="w-16 mb-4" src="../../loding.gif" alt="Loading" />
        <p className="text-gray-700 text-lg font-semibold">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
