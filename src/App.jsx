import styled from "styled-components"
import Header from "./components/Header/Header"
import MainContent from "./components/Main/MainContent"

import { Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import About from './views/About/About'
import Contacts from './views/Contacts/Contacts'

import './reset.css'
import "./app.css"
import Footer from "./components/Footer/Footer"
export default function App() {
  return (
    <>
      <Container>
          <Header />
          <MainContent>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </MainContent>
            {/* <Footer /> */}
      </Container>
    </>
  )
}

const Container = styled.div`
    max-width: 1340px;
    margin: 0 auto;
    padding: 0  15px;
    display: grid;
    grid-template-rows: min-content auto min-content;
    min-height: 100vh;
`