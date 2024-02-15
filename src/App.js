import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./action/userAction";
import AppRouter from "./routes/AppRouter";
import AppLayout from './Layout/AppLayout'
import Header from "./components/header";
function App() {
return(
  <>
  <Header/>
    <AppLayout>
        <AppRouter />
      </AppLayout>
  </>
)
}
export default App;
