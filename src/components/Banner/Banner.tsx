import style from './banner.module.css'

export function Banner(){
    return(
        <div className={style.banner}>
<div className={style.relout}>
    <h1 className={style.title}>Программа Лояльности
Fenox Gold</h1>
<p className={style.text}>
Вы владелец СТО или магазина автозапчатсей. 
Регистрируйтесь и выбирайте подарки!
</p>
</div>
<div className={style.setting}>
    <button className={style.relout} type="button">Войти</button>
    <button type="button">Зарегистрироваться</button>

</div>
</div>
    )
}