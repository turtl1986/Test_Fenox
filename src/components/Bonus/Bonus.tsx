import style from "./bonus.module.css";
import bonus from "../../assets/icon/surp.svg";
import { useNavigate } from "react-router-dom";

export function Bonus() {
  const navigate = useNavigate();


  
  return (
    <div className={style.container}>
      <div className={style.bonus}>
        <div className={style.description}>
          <h2 className={style.title}>
            Дарим бонус за регистрацию: 100 баллов{" "}
          </h2>
          <div className={style.setting}>
            <button
              className={style.button_white}
              onClick={() => navigate("/empty")}
              type="button"
            >
              Войти
            </button>
            <button
              className={style.button}
              onClick={() => navigate("/empty")}
              type="button"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>

        <img className={style.image} src={bonus} alt="bonus" />
      </div>
    </div>
  );
}
