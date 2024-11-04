import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <>
        <ToastContainer
            autoClose={2000}
        />
        <RouterProvider router={router}/>
    </>
  )
}

export default App
