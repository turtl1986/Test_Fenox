import style from './bonus.module.css'

export function Bonus(){
    return(
        <div className={style.container}>
            <div className={style.bonus}>
                
        <h2>Дарим бонус 
за регистрацию: 100 баллов </h2>
<div>
    <button type="button">Войти</button>
    <button type="button">Зарегистрироваться</button>
</div>
            </div>
        </div>
    )
}