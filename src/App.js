import React , { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";


const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const SignUp = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found.js"));
 
export default function App() {
  const { user } = useAuthListener();
  
  return (
    <UserContext.Provider value={{ user }}> 
    <Router>
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} /> 
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
};


