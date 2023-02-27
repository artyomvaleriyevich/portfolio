import './contact.scss'
import PageTitle from "../../components/PageTitle/PageTitle";
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import NetTitle from "../../components/NetTitle/NetTitle";



const Contact = () => {
    return (
        <div className={'contact'}>
            <div className="container">
               <PageTitle title={'Контакты'}/>
                <div className="contact__row">
                    <p className="contact__text">Eсли, у вас есть работа для меня или вопрос, не стесняйтесь обращаться ко мне.</p>

                    <div className="contact__block">
                        <h3 className="contact__message">Напишите мне сюда</h3>
                        <p className="contact__social"><AiOutlineInstagram/> @popoudin.spz</p>
                        <p className="contact__social"><AiOutlineWhatsApp/> +996555362034</p>
                        <p className="contact__social"><FaTelegramPlane/> @artyom__spz</p>
                    </div>
                </div>
                <NetTitle title={'Все контакты'}/>
               <div className="contact__socials">
                   <p className="contact__social"><AiOutlineInstagram/> @popoudin.spz</p>
                   <p className="contact__social"><FaTelegramPlane/> @artyom__spz</p>
               </div>
            </div>
        </div>
    );
};

export default Contact;