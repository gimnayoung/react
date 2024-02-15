import React, { useEffect } from "react";
import { useLocation } from "react-router";
// import { Col, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ToastMessage from "../components/ToastMessage";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../action/userAction";
import { commonUiActions } from "../action/commonUiAction";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.loginWithToken());
    console.log('작동')
  }, []);
  if (location.pathname !== "/") {
    return (
      <div>
        <ToastMessage />
        {children}
      </div>
    );
  }
  return (
    <div>
      <ToastMessage />
      {location.pathname.includes("admin") ? (
        <div className="vh-100">
          <div xs={12} md={3} className="sidebar mobile-sidebar">
            <Sidebar />
          </div>
          <div xs={12} md={9}>
            {children}
          </div>
        </div>
      ) : (
        <>
          <Navbar user={user} />
          {children}
        </>
      )}
    </div>
  );
};

export default AppLayout;
