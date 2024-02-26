import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import "../App.css";

import Nav from "../components/nav";
import Data from "../data/data.json";
import List from "../components/list";
import MainBG from "../components/mainBG";
import Detail from "../components/detail";
import Footer from "../components/footer";
import Boom from "../components/boom";
import Cart from "../components/cart";
import PPL1 from "../components/ppl1";
import PPL2 from "../components/ppl2";
import Recently from "../components/recently";
import Header from "../components/header";
import Login from "../components/login";
import Catetop from "../components/top";
import ProductAll from "../page/ProductAll";
import RegisterPage from "../page/RegisterPage";
import AdminOrderPage from "../page/AdminOrderPage";
import AdminProduct from "../page/AdminProduct";
import PrivateRoute from "./PrivateRoute";
import NewItemDialog from "../components/NewItemDialog"
import { cartActions } from "../action/cartAction";
import PaymentPage from "../page/PaymentPage";
import OrderCompletePage from "../page/OrderCompletePage";

const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user) {
      dispatch(cartActions.getCartQty());
    }
  }, [user]);
  let navigate = useNavigate();
  const [shoes, setShoes] = useState(Data);
  const [count, setCount] = useState(1);
  const [listtap, setListtap] = useState(0);
  const [mainall, setMainall] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductAll mainall={mainall} shoes={shoes} setShoes={setShoes} count={count}
                setCount={setCount}
              />
            </>
          }
        ></Route>
        <Route path="/product/:id" element={<Detail shoes={shoes} />}>
        </Route>
        <Route path="/payment/success" element={<OrderCompletePage />} />
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<div>에러페이지</div>}></Route>
        <Route
          path="/mypage"
          element={
            <>
              <Cart />
              <Recently />
            </>
          }
        ></Route>
        <Route
          path="/test"
          element={
            <>
              <NewItemDialog></NewItemDialog>
            </>
          }
        ></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<PrivateRoute permissionLevel="admin" />}>
          <Route path="/admin/product" element={<AdminProduct />} />
          <Route path="/admin/order" element={<AdminOrderPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default AppRouter;
