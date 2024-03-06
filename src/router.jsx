import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, {
  registerAction,
} from "./features/identity/components/register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/main-layout";
import Courses from "./pages/courses";
import Deal from "./pages/deal";
import Activity from "./pages/activity";
import Case from "./pages/case";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Deal />,
        index: true,
      },
      {
        path:"activity",
        element: <Activity />
        
      },
      {
        path:"case",
        element:<Case/>
      }
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
    ],
  },
]);

export default router;
