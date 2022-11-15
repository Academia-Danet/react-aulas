import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Router>
      <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Router>
  )
);
