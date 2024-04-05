import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

export const ProtectedRoute = ({
  isLoggedIn,
  redirectPath = '/login',
  children,
}) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace={true}  />;
  }

  return (
    <div>
        <Layout>
          {children}
        </Layout>
    </div>
  );
};