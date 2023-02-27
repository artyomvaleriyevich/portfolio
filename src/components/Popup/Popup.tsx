import './popup.scss'
import {IoClose} from "react-icons/all";
import {RootState, useAppDispatch} from "../../store";
import {useSelector} from "react-redux";
import {closePopup} from "../../redux/popupSlice";




const Popup = () => {

    const {status} = useSelector((s:RootState) => s.popup)
    const dispatch = useAppDispatch()

    return (
        <div style={{display: status ? 'flex': 'none'}} className={'overlay'}>
            <form className="form" action="https://formsubmit.co/933b84e68c1738092f158c72b2b04cf0" method="post">
                <h2 className="form__title">Заявка на Сообщение</h2>
                <div className="form__info">
                    <label className="form__label">
                        Имя
                        <input placeholder={'Введите своё имя'} maxLength={10} minLength={3} name={'name'} type="text" className="form__label-name"/>
                    </label>
                    <label className="form__label">
                        Email
                        <input placeholder={'Введите свою почту'} name={'email'} type="email" className="form__label-email"/>
                    </label>
                </div>

                <label className="form__label">
                    Сообщение
                    <textarea placeholder={'Ваше сообщение...'} maxLength={400} minLength={10} name="message" className="form__message"></textarea>
                </label>

                <input type="hidden" name="_captcha" value="false"/>
                <button className="form__btn purpleBtn" type={'submit'}>Отправить</button>

                <span onClick={()=>dispatch(closePopup())} className="form__closeBtn"><IoClose/></span>
            </form>
        </div>
    );
};

export default Popup;