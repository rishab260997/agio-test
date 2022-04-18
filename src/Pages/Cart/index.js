import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartRequest } from "../../Redux/actions";
import Loader from '../../Components/common/Loader'

const CartPage = () => {
    const dispatch = useDispatch();
    const {getUserCart:state} = useSelector(state=> state);
    console.log(state)

    useEffect(()=>{
        dispatch(getUserCartRequest())
    },[]);

    if(state.isLoading)
    return <Loader />
    return(
        <div>
            {state.data && state.data.length ? state.data.map((item, index)=>{
                return(
                    <div key={index}>
                        Cart Item
                    </div>
                )
            }):
            <p>No Items in cart</p>
            }
        </div>
    )
}

export default CartPage;