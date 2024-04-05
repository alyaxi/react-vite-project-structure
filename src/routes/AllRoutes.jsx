import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./ProtectedRoute";
import Main from "../pages/Main";

const AllRoutes = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  console.log({isLoggedIn})
  return (
    <Routes>
        <Route index path={`/login`} element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route
          path={`/`}
          element={
            <ProtectedRoute isLoggedIn={true}>
              <Main />
            </ProtectedRoute>
          }
        />
    </Routes>
  )
}

export default AllRoutes;