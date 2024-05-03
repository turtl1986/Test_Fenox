import styel from "./footer.module.css";
import vk from "../../assets/icon/vk.svg";
import viber from "../../assets/icon/viber.svg";
import tg from "../../assets/icon/tg.svg";
import youtube from "../../assets/icon/youtube.svg";
import drive2 from "../../assets/icon/drive2.ru.svg";
import logo from "../../assets/icon/logo_white.svg";

export function Footer() {
  return (
    <footer className={styel.footer}>
      <div className={styel.container}>
        <div className={styel.footer__container}>
          <div className={styel.setting}>
            <address className={styel.social}>
              <a href="#" className={styel.item}>
                <img src={vk} alt="vk" />
              </a>
              <a href="#" className={styel.item}>
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#" className={styel.item}>
                <img src={viber} alt="viber" />
              </a>
              <a href="#" className={styel.item}>
                <img src={tg} alt="tg" />
              </a>
              <a href="#" className={styel.item}>
                <img src={drive2} alt="drive2.ru" />
              </a>
            </address>
            <a href="/"> <img src={logo} alt="FENOX" /></a>
          </div>
          <nav className={styel.nav}>
            <ul className={styel.list}>
              <li className={styel.item}>
                <a href="/empty">Политика конфиденциальности</a>
              </li>
              <li className={styel.item}>
                <a href="/empty">Пользовательское соглашение</a>
              </li>
              <li className={styel.item}>
                <a href="/empty">Правила начисления бонусных баллов</a>
              </li>
              <li className={styel.item}>
                <a href="/empty">Договор оферты</a>
              </li>
              <li className={styel.item}>
                <a href="/empty">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
