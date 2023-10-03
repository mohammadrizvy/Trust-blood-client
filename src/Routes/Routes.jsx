import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Signin from "../pages/SignUp/SignUp";
import FindDonor from "../pages/FindDonor/FindDonor";
import BecomeADonor from "../pages/BecomeADonor/BecomeADonor";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/finddonor",
        element: <FindDonor></FindDonor>,
      },
      {
        path: "/becomeadonor",
        element: (
          <PrivateRoute>
            <BecomeADonor></BecomeADonor>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signin></Signin>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
