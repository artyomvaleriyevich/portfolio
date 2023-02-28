import './project.scss'
import PageTitle from "../../components/PageTitle/PageTitle";
import NetTitle from "../../components/NetTitle/NetTitle";
import portfolio from '../../assets/images/projects/portfolio.png'
import simple from '../../assets/images/projects/simple.png'
import flags from '../../assets/images/projects/flags.png'
import todoJs from '../../assets/images/projects/todoJs.png'
import food from '../../assets/images/projects/food.png'
import antools from '../../assets/images/projects/antools.png'
import {Link} from "react-router-dom";


const Project = () => {
    return (
        <div className={'projects'}>
            <div className="container">
                <PageTitle title={'Проекты'}/>
                <p className="projects__info">Вот список моих проектов</p>
                <NetTitle title={'Большие проекты'}/>
                <div className="projects__row">

                    <div className="projects__card">
                        <img src={portfolio} alt="" className="projects__card-img"/>
                        <p className="projects__card-stack">Html Scss React Vite</p>
                       <div className="projects__card-description">
                           <h3 className="projects__card-title">Портфолио</h3>
                           <p className="projects__card-info">Вы используете его</p>

                           <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/portfolio'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                       </div>
                    </div>

                    <div className="projects__card">
                        <img src={simple} alt="" className="projects__card-img"/>
                        <p className="projects__card-stack">Html Scss React Redux Redux-toolkit TypeScript Vite Axios db.json</p>
                        <div className="projects__card-description">
                            <h3 className="projects__card-title">Simple Design</h3>
                            <p className="projects__card-info">Интернет магазин по проектирование комнат</p>

                            <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/simpleVite'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                        </div>
                    </div>

                    <div className="projects__card">
                        <img src={flags} alt="" className="projects__card-img"/>
                        <p className="projects__card-stack">Html Scss React Redux Redux-toolkit TypeScript Axios </p>
                        <div className="projects__card-description">
                            <h3 className="projects__card-title">Country Flags</h3>
                            <p className="projects__card-info">Маленькая информация о стране</p>

                            <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/flag'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                        </div>
                    </div>

                    <div className="projects__card">
                        <img src={food} alt="" className="projects__card-img"/>
                        <p className="projects__card-stack">Html Scss React Redux Redux-toolkit db.json Axios Swiper Toastify</p>
                        <div className="projects__card-description">
                            <h3 className="projects__card-title">Food</h3>
                            <p className="projects__card-info">Добавки для улучшение здоровья</p>

                            <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/Food'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                        </div>
                    </div>

                </div>

                <NetTitle title={'Маленькие проекты'}/>
                <div className="projects__row">

                    <div className="projects__card">
                        <img src={todoJs} alt="" className="projects__card-img"/>
                        <p className="projects__card-stack">Html Scss JavaScript Vanta</p>
                        <div className="projects__card-description">
                            <h3 className="projects__card-title">Todo List</h3>
                            <p className="projects__card-info">Список дел</p>

                            <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/todoJs'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                        </div>
                    </div>

                    <div className="projects__card">
                        <img src={antools} alt="" className="projects__card-img"/>
                        <p className="projects__card-stack">Html Scss JavaScript Swiper</p>
                        <div className="projects__card-description">
                            <h3 className="projects__card-title">Antools</h3>
                            <p className="projects__card-info"></p>

                            <Link target={'_blank'} to={'https://github.com/artyomvaleriyevich/antols'} className="projects__card-btn purpleBtn">{`Github <~>`}</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;