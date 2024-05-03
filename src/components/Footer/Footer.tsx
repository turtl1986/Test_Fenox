import styel from "./footer.module.css";
import vk from "../../assets/vk.svg";
import viber from "../../assets/viber.svg";
import tg from "../../assets/tg.svg";
import youtube from "../../assets/youtube.svg";
import drive2 from "../../assets/drive2.ru.svg";
import logo from "../../assets/logo_white.svg";

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
            <img src={logo} alt="FENOX" />
          </div>
          <nav className={styel.nav}>
            <ul className={styel.list}>
              <li className={styel.item}>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li className={styel.item}>
                <a href="#">Пользовательское соглашение</a>
              </li>
              <li className={styel.item}>
                <a href="#">Правила начисления бонусных баллов</a>
              </li>
              <li className={styel.item}>
                <a href="#">Договор оферты</a>
              </li>
              <li className={styel.item}>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
