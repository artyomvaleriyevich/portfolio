import './home.scss'
import human from '../../assets/images/home/me/human.png'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import imgCard from '../../assets/images/home/project/project.png'
import imgSkill from '../../assets/images/home/skill/dots.png'
import imgHuman from '../../assets/images/home/aboutMe/human.png'
import {Link} from "react-router-dom";
import {AiOutlineInstagram,AiOutlineWhatsApp} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {useAppDispatch} from "../../store";
import {openPopup} from "../../redux/popupSlice";

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
                        <p className={'me__quoteBlock-quote'}>Человек может быть гением или обладать всеми необходимыми навыками, но если он не верит в себя, он не будет выкладываться по полной.</p>
                        <p className={'me__quoteBlock-name'}>- Марк Цукерберг</p>
                    </div>
                </div>
            </section>
            <section className="project">
                <div className="container">
                    <SectionTitle title={'проекты'}/>
                    <div className="project__row">

                        <div className="project__card">
                            <img src={imgCard} alt="" className="project__card-img"/>
                            <p className="project__card-description">HTML SCSS React Python</p>
                            <div className="project__card-box">
                                <h3 className="project__card-title">ChertNodes</h3>
                                <p className="project__card-subtitle">Minecraft servers hosting </p>
                                <button className="project__card-btn purpleBtn">{`Live <~>`}</button>
                            </div>
                        </div>


                        <div className="project__card">
                            <img src={imgCard} alt="" className="project__card-img"/>
                            <p className="project__card-description">HTML SCSS React Python HTML SCSS React Python</p>
                            <div className="project__card-box">
                                <h3 className="project__card-title">ProtectX</h3>
                                <p className="project__card-subtitle">Discord anti-crash bot</p>
                                <button className="project__card-btn purpleBtn">{`Live <~>`}</button>
                            </div>
                        </div>

                        <div className="project__card">
                            <img src={imgCard} alt="" className="project__card-img"/>
                            <p className="project__card-description">HTML SCSS React Python</p>
                            <div className="project__card-box">
                                <h3 className="project__card-title">Kahoot Answers Viewer</h3>
                                <p className="project__card-subtitle">Get answers to your kahoot quiz</p>
                                <button className="project__card-btn purpleBtn">{`Live <~>`}</button>
                            </div>
                        </div>

                    </div>

                    <Link className={'project__btn'} to={'project'}>{`Все мои проекты ~~>`}</Link>
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

                           <Link to={'/about'} className="purpleBtn aboutMe__btn">{`Читать дальше ->`}</Link>
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
                            <p className="contactMe__social"><AiOutlineInstagram/> @popoudin.spz</p>
                            <p className="contactMe__social"><AiOutlineWhatsApp/> +996555362034</p>
                            <p className="contactMe__social"><FaTelegramPlane/> @artyom__spz</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;