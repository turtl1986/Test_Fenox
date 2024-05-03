import {Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/icon/logo.svg'
import style from './header.module.css'


export function Header(){
    const navigate=useNavigate()

return(
<header className={style.container}>
    <div className={style.header}>
    <div className={style.list}>
    <Link className={style.item} to='/empty'>Правила участия</Link>
    <Link className={style.item} to='/empty'>Каталог подарков</Link>
    <Link className={style.item} to='/empty'>Партнёры</Link>
    </div>
    <a href="/"> <img className={style.logo} src={logo} alt="FENOX" /></a>
    <button className={style.button} onClick={()=>navigate('/')} type="button">Войти</button>

    </div>
</header>
    
)
}