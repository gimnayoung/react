import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./reducer/store"
import { GoogleOAuthProvider } from '@react-oauth/google';
const REACT_APP_GOOGLE_CLIENT_ID=process.env.REACT_APP_GOOGLE_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //디버깅용 1번실행+1번실행
  // <React.StrictMode>
  <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
