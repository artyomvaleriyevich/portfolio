
import './home.scss'
import human from '../../assets/images/home/me/human.png'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import imgSkill from '../../assets/images/home/skill/dots.png'
import imgHuman from '../../assets/images/home/aboutMe/human.png'
import {Link} from "react-router-dom";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {useAppDispatch} from "../../store";
import {openPopup} from "../../redux/popupSlice";
import todoJs from "../../assets/images/projects/todoJs.png";
import simple from "../../assets/images/projects/simple.png";
import food from "../../assets/images/projects/food.png";
import { animateScroll as scroll} from 'react-scroll'

const Home = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={'home'}>
            <section className="me">
                <div className="container">
                    <div className="me__row">
                        <div className="me__info">
                            <p className="me__title">Артемий — <span className="me__title-span">front-end разработчик</span></p>
                            <p className="me__subtitle">Он создает веб-сайты, где технологии сочетаются с творчеством.</p>
                            <button onClick={()=> dispatch(openPopup())} type={'button'} className="purpleBtn me__btn">Свяжитесь со мной!!</button>
                        </div>

                        <div className="me__blockImg">
                            <img src={human} alt="human" className="me__img"/>
                            <p className="me__portfolio">
                                <span className="me__portfolio-box"></span>
                                Сейчас работает над <span className="me__portfolio-span">портфолио</span>
                            </p>
                        </div>
                    </div>

                    <div className="me__quoteBlock">
                        <p className={'me__quoteBlock-quote'}>" Человек может быть гением или обладать всеми необходимыми навыками, но если он не верит в себя, он не будет выкладываться по полной. "</p>
                        <p className={'me__quoteBlock-name'}>- Марк Цукерберг</p>
                    </div>
                </div>
            </section>
            <section className="project">
                <div className="container">
                    <SectionTitle title={'проекты'}/>
                    <div className="project__row">

                        <div className="project__card">
                            <img src={todoJs} alt="" className="projects__card-img"/>
                            <p className="projects__card-stack">Html Scss JavaScript Vanta</p>
                            <div className="projects__card-description">
                                <h3 className="projects__card-title">Todo List</h3>
                                <p className="projects__card-info">Список дел</p>

                                <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/todoJs'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                            </div>
                        </div>


                        <div className="project__card">
                            <img src={simple} alt="" className="projects__card-img"/>
                            <p className="projects__card-stack">Html Scss React Redux Redux-toolkit TypeScript Vite Axios db.json
                            json-server
                            </p>
                            <div className="projects__card-description">
                                <h3 className="projects__card-title">Simple Design</h3>
                                <p className="projects__card-info">Интернет магазин по проектирование комнат</p>

                                <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/simpleVite'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                            </div>
                        </div>

                        <div className="project__card">
                            <img src={food} alt="" className="projects__card-img"/>
                            <p className="projects__card-stack">Html Scss React Redux Redux-toolkit db.json Axios Swiper Toastify json-server</p>
                            <div className="projects__card-description">
                                <h3 className="projects__card-title">Food</h3>
                                <p className="projects__card-info">Добавки для улучшение здоровья</p>

                                <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/Food'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                            </div>
                        </div>

                    </div>

                    <Link  onClick={()=> scroll.scrollToTop()} className={'project__btn'} to={'project'}>{`Все мои проекты ~~>`}</Link>
                </div>
            </section>
            <section className="skill">
                <div className="container">
                    <SectionTitle title={'скиллы'}/>
                    <div className="skill__content">
                        <div className="skill__block">
                            <img src={imgSkill} alt=""/>
                        </div>
                        <div className="skill__row">

                            <div className="skill__card">
                                <h3 className="skill__card-title">Languages</h3>
                                <p className="skill__card-subtitle">TypeScript JavaScript</p>
                            </div>

                            <div className="skill__card">
                                <h3 className="skill__card-title">Other</h3>
                                <p className="skill__card-subtitle">HTML CSS SCSS FlexBox</p>
                            </div>

                            <div className="skill__card">
                                <h3 className="skill__card-title">Tools</h3>
                                <p className="skill__card-subtitle">Webstorm Figma Git GitHub Vite Material-UI BEM</p>
                            </div>
                            <div className="skill__card">
                                <h3 className="skill__card-title">Frameworks</h3>
                                <p className="skill__card-subtitle">React</p>
                            </div>

                            <div className="skill__card">
                                <h3 className="skill__card-title">Library</h3>
                                <p className="skill__card-subtitle">Redux Redux-Toolkit</p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutMe">
                <div className="container">
                    <SectionTitle title={'Обо мне'}/>
                    <div className="aboutMe__row">
                       <div className="aboutMe__info">
                           <p className="aboutMe__text">
                               Привет, я Артём!
                               <br/>
                               <br/>
                               Я front-end разработчик из Бишкека, Кыргызстан. Я могу разрабатывать веб-сайты с нуля и превращать их в современные удобные веб-интерфейсы.
                               <br/>
                               <br/>
                               Я помогаю различным клиентам установить свое присутствие в Интернете. Всегда стараюсь узнавать о новейших технологиях и фреймворках.
                           </p>

                           <Link onClick={()=> scroll.scrollToTop()} to={'/about'} className="purpleBtn aboutMe__btn">{`Читать дальше ->`}</Link>
                       </div>
                        
                        <div className="aboutMe__picture">
                            <img src={imgHuman} alt="" className="aboutMe__img"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactMe">
                <div className="container">
                    <SectionTitle title={'Контакты'}/>
                    <div className="contactMe__row">
                        <p className="contactMe__text">Eсли, у вас есть работа для меня или вопрос, не стесняйтесь обращаться ко мне.</p>
                        <div className="contactMe__block">
                            <h3 className="contactMe__message">Напишите мне сюда</h3>
                            <a href={'https://www.instagram.com/popoudin.spz/'} className="contactMe__social contactMe__social-instagram"><AiOutlineInstagram/> @popoudin.spz</a>
                            <a href={'https://t.me/artyom_spz'} className="contactMe__social contactMe__social-telegram"><FaTelegramPlane/> @artyom__spz</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;