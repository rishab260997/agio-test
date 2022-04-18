import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../Components/common/Loader";
import Product from "../../Components/Dashboard/Product";
import { getSingleProductRequest } from "../../Redux/actions";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(useParams(), id)
    const {getSingleProduct: state} = useSelector(state=> state);
    console.log(state)

    useEffect(()=>{
        dispatch(getSingleProductRequest({id: id}))
    },[id]);

    if(state.isLoading){
        return <Loader />
    }
    return(
        <div>
            {state?.data && <Product product={state.data} showButtons={false} />}
        </div>
    )
}

export default ProductDetails;