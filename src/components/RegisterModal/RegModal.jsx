import style from "./RegModal.module.css"
import { useState } from "react"

export default function RegModal({modal, setModal}) {
    return (
    <> 
        <div className={`${style.modal_wrapper} ${modal ? style.open_wrapper: ""}`} onClick={() => setModal(false)}>
        <div className={`${style.inner_wrapper} ${modal ? style.open : ""}`} onClick={(e) => e.stopPropagation()}>
            <p>Регистрация</p>
            <form className={style.form}>
                <div className={style.input}>
                    <label htmlFor="name">Имя пользователя</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className={style.input}>
                    <label htmlFor="email">Почта</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className={style.input}>
                    <label htmlFor="pass">Пароль</label>
                    <input type="text" id="pass" name="password" />
                </div>
                <button className={style.reg_button}>Зарегистрироваться</button>
            </form>
        </div>
    </div>

    </>    
  )
}


