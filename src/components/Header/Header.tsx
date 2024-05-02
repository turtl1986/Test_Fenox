import style from './header.module.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'



export function Header(){

return(
<header className={style.header}>
<div className={style.list}>
    <Link className={style.item} to=''>Правила участия</Link>
    <Link className={style.item} to=''>Каталог подарков</Link>
    <Link className={style.item} to=''>Партнёры</Link>
    </div>
    <img className={style.logo} src={logo} alt="FENOX" />
    <button className={style.button} type="button">Войти</button>
</header>
    
)
}