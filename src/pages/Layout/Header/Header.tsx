import './header.scss'
import {Link, NavLink} from "react-router-dom";
import logo from '../../../assets/logos/logo.png'
import {FaHamburger, FaTelegramPlane} from "react-icons/fa";
import {AiFillGithub,AiOutlineInstagram} from "react-icons/ai";
import {MdCloseFullscreen} from "react-icons/md";
import {RootState, useAppDispatch} from "../../../store";
import {closeBurger, openBurger} from "../../../redux/burgerSlice";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

export const Header = () => {

    const headerAnimation = {
        hidden:{
            y:200,
            opacity:0,
        },
        visible:{
            y: 0,
            opacity:1,
            transition:{duration: 2}
        }
    }

    const {status} = useSelector((s:RootState) => s.burger)
    const dispatch = useAppDispatch()

    return (
        <header className="header">
            <div className="container">
                <motion.div
                    className="header__row"
                    initial={'hidden'}
                    animate={'visible'}
                    variants={headerAnimation}

                >
                    <p className={'header__title'}>
                        <img className={'header__img'} src={logo} alt="headerLogo"/>
                        Артемий
                    </p>

                    <ul className={`header__pages ${status && "active"}`}>
                        <NavLink onClick={()=> dispatch(closeBurger())} className={'header__link'} to={'/'}><span className="net">#</span>главная</NavLink>
                        <NavLink onClick={()=> dispatch(closeBurger())} className={'header__link'} to={'/project'}><span className="net">#</span>проекты</NavLink>
                        <NavLink onClick={()=> dispatch(closeBurger())} className={'header__link'} to={'/about'}><span className="net">#</span>обо мне</NavLink>
                        <NavLink onClick={()=> dispatch(closeBurger())} className={'header__link'} to={'/contact'}><span className="net">#</span>контакты</NavLink>

                        <button type={"button"} onClick={()=> dispatch(closeBurger())} className="header__close"><MdCloseFullscreen/></button>
                    </ul>

                    <div className="burger" onClick={()=> dispatch(openBurger())}>
                        <span className="burger__svg"><FaHamburger/></span>
                    </div>
                </motion.div>
            </div>

            <div className="header__menu">
                <span className="header__line"></span>
                <Link className={'header__social header__social-git'} to={'https://github.com/artyomvaleriyevich'}><AiFillGithub/></Link>
                <Link className={'header__social header__social-instagram'} to={'https://www.instagram.com/popoudin.spz/'}><AiOutlineInstagram/></Link>
                <Link className={'header__social header__social-telegram'} to={'https://t.me/artyom_spz'}><FaTelegramPlane/></Link>
            </div>

        </header>
    )
}