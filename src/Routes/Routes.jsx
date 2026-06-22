import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Signup from "../Components/SignUp";
import Signin from "../Components/SignIn";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/plants',
                Component: Plants
            },
            {
                path: '/myProfile',
                Component: MyProfile
            },
            {
                path:'/Signup',
                Component: Signup
            },
            {
                path:'/signin',
                Component: Signin
            }
        ]
    }
])