import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/common/Loader";
import Product from "../../Components/Dashboard/Product";
import { getAllProductsRequest } from "../../Redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { getAllProducts: state } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllProductsRequest());
  }, []);
  if(state.isLoading){
    return <Loader />
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {state.data &&
          state.data.length &&
          state.data.map((product, index) => {
            return (
              <div key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
