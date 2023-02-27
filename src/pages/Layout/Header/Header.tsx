import './header.scss'
import {Link, NavLink} from "react-router-dom";
import logo from '../../../assets/logos/logo.png'
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillGithub,AiOutlineInstagram} from "react-icons/ai";


export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <p className={'header__title'}>
                        <img className={'header__img'} src={logo} alt="headerLogo"/>
                        Артемий
                    </p>

                    <ul className="header__pages">
                        <NavLink className={'header__link'} to={'/'}><span className="net">#</span>главная</NavLink>
                        <NavLink className={'header__link'} to={'/project'}><span className="net">#</span>проекты</NavLink>
                        <NavLink className={'header__link'} to={'/about'}><span className="net">#</span>обо мне</NavLink>
                        <NavLink className={'header__link'} to={'/contact'}><span className="net">#</span>контакты</NavLink>
                    </ul>
                </div>
            </div>

            <div className="header__menu">
                <span className="header__line"></span>
                <Link className={'header__social'} to={'https://github.com/artyomvaleriyevich'}><AiFillGithub/></Link>
                <Link className={'header__social'} to={'https://www.instagram.com/popoudin.spz/'}><AiOutlineInstagram/></Link>
                <Link className={'header__social'} to={'https://t.me/artyom_spz'}><FaTelegramPlane/></Link>
            </div>

        </header>
    )
}