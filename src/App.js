import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./pages/Register";
import {basePath, homePath, registerPath} from "./constants/routes";

const App = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigate replace to={registerPath} />}/>
          <Route path={registerPath} element={<Register />} />
          <Route path={homePath} element={<Home />} />
      </Routes>
  );
};

const WrappedApp = () => {
  return (
      <BrowserRouter basename={basePath}>
        <App />
      </BrowserRouter>
  );
};

export default WrappedApp;
