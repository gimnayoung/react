import { configureStore, createSlice } from "@reduxjs/toolkit";

//detial 페이지에서 주문하기 버튼을 누르면 추가되는ㄴ
let cartlist = createSlice({
  name: "cartlist",
  initialState: [
    { id:0,title:"",img:"",count:0,price:""}
  ],
  reducers: {
    changeCount(state) { return state.count + 1;
    },
    addItem(state,action){
       state.push(action.payload)
    }
  },
});
// export let { changeCount } = cartlist.action
export default configureStore({
  reducer: {
    cartlist: cartlist.reducer,
  },
});

export let {addItem} =cartlist.actions
