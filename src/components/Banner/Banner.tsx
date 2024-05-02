import style from './banner.module.css'

export function Banner(){
    return(
        <div>
<div>
    <h1>Программа Лояльности
Fenox Gold</h1>
<p>
Вы владелец СТО или магазина автозапчатсей. 
Регистрируйтесь и выбирайте подарки!
</p>
<div>
    <button type="button">Войти</button>
    <button type="button">Зарегистрироваться</button>
</div>
</div>
<div>
    <div>
        <p>регистрируйтесь</p>
        <span>Приветственные бонусы, в размере 100 баллов</span>
    </div>
    <div>
        <p>Получайте баллы</p>
        <span>Покупайте товары FENOX и получайте баллы</span>
    </div>
    <div>
        <p>Забирайте бонусы</p>
        <span>Обменивайте баллы на подарки из каталога</span>
    </div>
</div>
        </div>
    )
}