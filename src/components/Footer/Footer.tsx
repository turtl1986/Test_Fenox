import styel from './footer.module.css'
import vk from '../../assets/vk.svg'
import viber from '../../assets/viber.svg'
import tg from '../../assets/tg.svg'
import youtube from '../../assets/youtube.svg'
import drive2 from '../../assets/drive2.ru.svg'
import logo from '../../assets/logo_white.svg'


export function Footer(){
    return(
        <footer className={styel.footer}>
<div className={styel.setting}>
<ul className={styel.social}>
    <li className={styel.item}>
<img src={vk} alt="vk" />
    </li>
    <li className={styel.item}>
<img src={youtube} alt="youtube" />
    </li>
    <li className={styel.item}>
<img src={viber} alt="viber" />
    </li>
    <li className={styel.item}>
<img src={tg} alt="tg" />
    </li>
    <li className={styel.item}>
<img src={drive2} alt="drive2.ru" />
    </li>
</ul>
<img src={logo} alt="FENOX" />
</div>

<ul className={styel.list}>
    <li className={styel.item}>
    Политика конфиденциальности
    </li>
    <li className={styel.item}>Пользовательское соглашение</li>
    <li className={styel.item}>Правила начисления бонусных баллов</li>
    <li className={styel.item}>Договор оферты</li>
    <li className={styel.item}>Контакты</li>
</ul>

        </footer>
    )
}