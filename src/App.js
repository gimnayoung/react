import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./action/userAction";
import AppRouter from "./routes/AppRouter";
import AppLayout from './Layout/AppLayout'
import Navbar from "./components/Navbar";
function App() {
  const { user } = useSelector((state) => state.user);
return(
  <>
    <AppLayout>
        <AppRouter />
    </AppLayout>
  </>
)
}
export default App;
