import './project.scss'
import PageTitle from "../../components/PageTitle/PageTitle";
import NetTitle from "../../components/NetTitle/NetTitle";
import portfolio from '../../assets/images/projects/portfolio.png'


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

                           <button className="projects__card-btn purpleBtn">{`Live <~>`}</button>
                       </div>
                    </div>

                </div>

                <NetTitle title={'Маленькие проекты'}/>
                <div className="projects__row">

                    <div className="projects__card">
                        <img src={portfolio} alt="" className="projects__card-img"/>
                        <p className="projects__card-stack">Html Scss React Vite</p>
                        <div className="projects__card-description">
                            <h3 className="projects__card-title">Портфолио</h3>
                            <p className="projects__card-info">Вы используете его</p>

                            <button className="projects__card-btn purpleBtn">{`Live <~>`}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;