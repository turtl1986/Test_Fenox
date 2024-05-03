import style from './baner.module.css'

export function Baner(){
    return(
        <div className={style.container}>
            <div className={style.baner}>
            <div className={style.relout}>
    <h1 className={style.title}>Программа Лояльности<br />
Fenox Gold</h1>
<p className={style.text}>
Вы владелец СТО или магазина автозапчатсей. 
Регистрируйтесь и выбирайте подарки!
</p>
<div className={style.setting}>
    <button className={style.button_white} type="button">Войти</button>
    <button className={style.button} type="button">Зарегистрироваться</button>
</div>
</div>

<div className={style.cards}>
    <div className={style.card}>
        <p className={style.name}>регистрируйтесь</p>
        <span className={style.description}>Приветственные бонусы, в размере 100 баллов</span>
    </div>
    <div className={style.card}>
        <p className={style.name}>Получайте баллы</p>
        <span className={style.description}>Покупайте товары FENOX и получайте баллы</span>
    </div>
    <div className={style.card}>
        <p className={style.name}>Забирайте бонусы</p>
        <span className={style.description}>Обменивайте баллы на подарки из каталога</span>
    </div>
</div>
            </div>


</div>
    )
}