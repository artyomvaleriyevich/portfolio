import { ToastContainer } from "react-toastify"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import {Outlet} from "react-router-dom";
import Popup from "../../components/Popup/Popup";


export const Layout = () => {
    return (
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
            <Popup/>
        </div>
    )
}