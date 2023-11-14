import styled from "styled-components"
import style from './Header.module.css'
import { Link } from "react-router-dom"
import RegModal from "../RegisterModal/RegModal"

import { useState } from 'react'


export default function Header() {

    const  [modal, setModal] = useState(false)


  return (
    <header className={style.header}>
        <div className={style.inner_header}>
        <div className={style.header_navigation}>
            <Link to="/" className={style.link} href="">Главная</Link>
            <Link to="/about" className={style.link} href="">Проект</Link>
            <Link to="/contacts" className={style.link} href="">Контакты</Link>
        </div>
        <div className={style.buttons}>
            <AuthButton onClick={() => setModal(true)}>Регистрация</AuthButton>
            <LoginButton>Войти</LoginButton>
        </div>
        </div>
        <RegModal modal={modal} setModal={setModal}/>
    </header>
  )
}

const AuthButton = styled.div`
    color: white;
    border: 2px solid white;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`

const LoginButton = styled(AuthButton)`
    background-color: white;
    color: black;
`
