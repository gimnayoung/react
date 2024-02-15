import api from "../utils/api";
import * as types from "../constants/user.constants"
import { commonUiActions } from "./commonUiAction";
import * as commonTypes from "../constants/commonUI.constants";

const loginWithToken = () => async (dispatch) => {
  try{
    dispatch({type:types.LOGIN_WITH_TOKEN_REQUEST})
    const response=await api.get('/user/me');
    if(response.status !== 200)throw new Error(response.error);
    dispatch({type:types.LOGIN_WITH_TOKEN_SUCCESS,payload:response.data})
  }catch(error){
    dispatch({type:types.LOGIN_WITH_TOKEN_FAIL,payload:error})
    dispatch(logout())
  }
};

const loginWithEmail = ({email,password},navigate) => async (dispatch) => {
  try{
    console.log('로그인 요청 전:', email, password);
    dispatch({type:types.LOGIN_REQUEST})
    const response=await api.post('/auth/login',{email,password});
    console.log('로그인 요청 후:', response);
    if(response.status !== 200)throw new Error(response.error);
    sessionStorage.setItem("token",response.data.token);
    dispatch({type:types.LOGIN_SUCCESS,payload:response.data});
    console.log(response.data);
    // navigate('/');
  }catch(error){
    console.error('로그인 요청 에러:', error);
    dispatch({type:types.LOGIN_FAIL,payload:error.error});
  }
};

const logout = () => async (dispatch) => {
  dispatch({type:types.LOGOUT});
  sessionStorage.removeItem("token");
};

const loginWithGoogle = (token) => async (dispatch) => {
  try{
    dispatch({type:types.GOOGLE_LOGIN_REQUEST});
    const response=await api.post('/auth/google',{token});
    if(response.status !== 200)throw new Error(response.error)
    sessionStorage.setItem("token",response.data.token);
    dispatch({type:types.GOOGLE_LOGIN_SUCCESS,payload:response.data})
  }
  catch(error){
    dispatch({type:types.GOOGLE_LOGIN_FAIL,payload:error.error});
    dispatch(commonUiActions.showToastMessage(error.error,'error'))
  }
};

const registerUser =
  ({ email, name, password },navigate) =>
  async (dispatch) => {
    try{
      dispatch({type:types.REGISTER_USER_REQUEST})
      const response =await api.post('/user',{email, name, password});
      if(response.status !==200)throw new Error(response.error);
      dispatch({type:types.REGISTER_USER_SUCCESS,});
      dispatch(commonUiActions.showToastMessage('회원가입을 완료 했습니다.',"success"));
      navigate('/login');
    }catch(error){
      dispatch({type:types.REGISTER_USER_FAIL,payload:error.error});
    }
  };
export const userActions = {
  loginWithToken,
  loginWithEmail,
  logout,
  loginWithGoogle,
  registerUser,
};
