import './footer.scss'
import logo from '../../../assets/logos/logo.png'
import {Link} from "react-router-dom";
import {AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

export const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className="container">
                <div className="footer__row">
                    <div className="footer__title">
                        <div className="footer__email">
                            <p className="footer__logo">
                                <img src={logo} alt="footerLogo" className="footer__img"/>
                                Артемий
                            </p>
                            artyom.valeriyevich@gmail.com
                        </div>

                        <p className="footer__job">Front-end developer</p>
                    </div>
                    <div className="footer__social">
                        <p className="footer__social-title">Социальные сети</p>
                        <ul className="footer__list">
                            <Link to={'https://github.com/artyomvaleriyevich'}><AiFillGithub/></Link>
                            <Link to={'https://www.instagram.com/popoudin.spz/'}><AiOutlineInstagram/></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="footer__by">© Copyright 2023. Made by Artyom</p>
        </footer>
    )
}