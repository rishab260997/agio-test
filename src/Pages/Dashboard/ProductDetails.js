import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../Components/Dashboard/Product";
import { getSingleProductRequest } from "../../Redux/actions";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {getSingleProduct: {data: state}} = useSelector(state=> state);
    console.log(state)

    useEffect(()=>{
        dispatch(getSingleProductRequest({id: id}))
    },[])
    return(
        <div>
            <Product product={state} showButtons={false} />
        </div>
    )
}

export default ProductDetails;