import './about.scss'
import PageTitle from "../../components/PageTitle/PageTitle";
import imgHuman from "../../assets/images/home/aboutMe/human.png";
import imgFact from "../../assets/images/about/logo.png";
import NetTitle from "../../components/NetTitle/NetTitle";


const About = () => {
    return (
        <div className={'about'}>
            <div className="container">
                <PageTitle title={'Обо мне'}/>
                <div className="about__row">
                        <p className="about__text">
                            Привет, я Артём!
                            <br/>
                            <br/>
                            Я front-end разработчик из Бишкека, Кыргызстан. Я могу разрабатывать веб-сайты с нуля и превращать их в современные удобные веб-интерфейсы.
                            <br/>
                            <br/>
                            Я помогаю различным клиентам установить свое присутствие в Интернете. Всегда стараюсь узнавать о новейших технологиях и фреймворках.
                        </p>

                    <div className="about__picture">
                        <img src={imgHuman} alt="" className="about__img"/>
                    </div>
                </div>

                <NetTitle title={'скиллы'}/>
                <div className="about__skills">
                    <div className="about__card">
                        <h3 className="about__card-title">Languages</h3>
                        <p className="about__card-subtitle">TypeScript JavaScript</p>
                    </div>

                    <div className="about__card">
                        <h3 className="about__card-title">Other</h3>
                        <p className="about__card-subtitle">HTML CSS SCSS FlexBox</p>
                    </div>

                    <div className="about__card">
                        <h3 className="about__card-title">Tools</h3>
                        <p className="about__card-subtitle">Webstorm Figma Git GitHub Vite Material-UI BEM</p>
                    </div>

                    <div className="about__card">
                        <h3 className="about__card-title">Frameworks</h3>
                        <p className="about__card-subtitle">React</p>
                    </div>

                    <div className="about__card">
                        <h3 className="about__card-title">Library</h3>
                        <p className="about__card-subtitle">Redux Redux-Toolkit</p>
                    </div>

                </div>

                <NetTitle title={'Факты обо мне'}/>
                <div className="about__facts">
                    <div className="about__facts-block">
                        <p className="about__fact">Я амбиверт. Это люди, тип личности которых находится посередине между интровертами и экстравертами.</p>
                        <p className="about__fact">Люблю кататься на лыжах</p>
                        <p className="about__fact">Занимаюсь спортом</p>
                        <p className="about__fact">Очень люблю катать по ночному городу</p>
                        <p className="about__fact">Обожаю слушать музыку во время работы</p>
                    </div>
                    
                    <div className="about__facts-picture">
                        <img src={imgFact} alt="" className="about__fact-img"/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;