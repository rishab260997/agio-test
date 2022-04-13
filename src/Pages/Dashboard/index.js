import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsRequest } from "../../Redux/actions";

const Dashboard = () => {
    const dispatch = useDispatch();
    const {getAllProducts: state} = useSelector(state=> state);
    console.log(state.data)
    useEffect(()=>{
        dispatch(getAllProductsRequest())
    },[])
    return(
        <div>

        </div>
    )
}

export default Dashboard;