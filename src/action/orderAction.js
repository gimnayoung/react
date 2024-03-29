import api from "../utils/api";
import * as types from "../constants/order.constants";
import { cartActions } from "./cartAction";
import { commonUiActions } from "./commonUiAction";

const createOrder = (payload, navigate) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_ORDER_REQUEST });
    const response = await api.post('/order', payload);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: response.data.orderNum });
    await dispatch(cartActions.getCartQty());
    navigate('/payment/success');
  } catch (error) {
    dispatch({ type: types.CREATE_ORDER_FAIL, payload: error.message });
    dispatch(commonUiActions.showToastMessage(error.error, "err")); // 여기서 에러가 남
  }
};

const getOrder = () => async (dispatch) => {};
const getOrderList = (query) => async (dispatch) => {};

const updateOrder = (id, status) => async (dispatch) => {};

export const orderActions = {
  createOrder,
  getOrder,
  getOrderList,
  updateOrder,
};