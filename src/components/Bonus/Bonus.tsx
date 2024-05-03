import style from './bonus.module.css'
import bonus from '../../assets/surp.svg'

export function Bonus(){
    return(
        <div className={style.container}>
            <div className={style.bonus}>
               <div className={style.description}>
               <h2 className={style.title}>Дарим бонус 
за регистрацию: 100 баллов </h2>
<div className={style.setting}>
<button className={style.button_white} type="button">Войти</button>
    <button className={style.button} type="button">Зарегистрироваться</button>

</div>
               </div>
                
<img className={style.image} src={bonus} alt="bonus" />
               
                
      
            </div>
        </div>
    )
}