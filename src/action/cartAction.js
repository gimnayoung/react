import api from "../utils/api";
import * as types from "../constants/cart.constants";
import { toast } from "react-toastify";
import { commonUiActions } from "./commonUiAction";

const addToCart =
  ({ id, size }) =>
    async (dispatch) => {
      try {
        dispatch({ type: types.ADD_TO_CART_REQUEST })
        const response = await api.post("/cart", { productId: id, size: size, qty: 1 });
        console.log("카트 아이템 추가", response);
        if (response.status !== 200) throw new Error(response.error);
        dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: response.data.carItemQty });
        dispatch(commonUiActions.showToastMessage("카트에 담겼습니다 !", "success"));
        
      }
      catch (error) {
        dispatch({ type: types.ADD_TO_CART_FAIL, payload: error.error });
        dispatch(commonUiActions.showToastMessage(error.error, "상품에 담기지 못했습니다."));
      }
    };

const getCartList = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CART_LIST_REQUEST });
    const response = await api.get("/cart");
    console.log("adfdsfa",response);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({type:types.GET_CART_LIST_SUCCESS,payload:response.data.data});
  }
  catch (error) {
    dispatch({type:types.GET_CART_LIST_FAIL,payload:error.error});
    dispatch(commonUiActions.showToastMessage(error.error, "상품을 가져오지 못했습니다."));
  }
};
const deleteCartItem = (id) => async (dispatch) => { 
  try{
    dispatch({type:types.DELETE_CART_ITEM_REQUEST});
    const response =await api.delete(`/cart/${id}`);
    if(response.status !== 200) throw new Error(response.error);
    dispatch({type:types.DELETE_CART_ITEM_SUCCESS,payload:response.data.carItemQty})
    dispatch(getCartList());
  }
  catch(error){
    dispatch({type:types.DELETE_CART_ITEM_FAIL,payload:error});
  }
};

const updateQty = (id, value) => async (dispatch) => { 
  try{
    dispatch({type:types.UPDATE_CART_ITEM_REQUEST});
    const response=await api.put(`/cart/${id}`,{qty:value});
    if(response.status !== 200)throw new Error(response.error);
    dispatch({
      type: types.UPDATE_CART_ITEM_SUCCESS,
      payload: response.data.data,
    })
  }
  catch(error){
    dispatch({ type: types.UPDATE_CART_ITEM_FAIL, payload: error });
    dispatch(commonUiActions.showToastMessage(error.message,'error'));
  }
};
const getCartQty = () => async (dispatch) => { 
  try{
    dispatch({type:types.GET_CART_QTY_REQUEST});
    const response=await api.get('/cart/qty');
    if(response.status !== 200 ) throw new Error(response.error);
    dispatch({type:types.GET_CART_QTY_SUCCESS, payload:response.data.qty});
  }
  catch(error){
    dispatch({type:types.GET_CART_QTY_FAIL,payload:error});
    dispatch(commonUiActions.showToastMessage(error,"err"))
  }
};

export const cartActions = {
  addToCart,
  getCartList,
  deleteCartItem,
  updateQty,
  getCartQty,
};