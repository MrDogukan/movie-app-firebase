import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import "./App.css"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
      <ToastContainer/>
    </AuthContextProvider>
  );
};

export default App;
