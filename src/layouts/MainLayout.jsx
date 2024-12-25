import { Outlet } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import { FaArrowCircleUp } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer
        icon={FaArrowCircleUp}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        // rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </>
  );
};
export default MainLayout;
