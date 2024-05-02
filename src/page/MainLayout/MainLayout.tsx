import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import style from './mainLayout.module.css'

export function MainLayout(){
    return(
        <div className={style.container}>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}