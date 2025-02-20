import style from './cart.module.css'
import card from '../../shared/bd/card.json'
import cards from '../../assets/image/card.jpg'
import plus from '../../assets/icon/plus.svg'


export function Card(){
    return(
        <div className={style.container}>
            <h2 className={style.title}>Подарочные карты</h2>
<div className={style.card__container}>
            {
                card.map(item=>{
                    return (
                        <div className={style.card} key={item.id}>
                                                    <img
  src="https://example.com/image.jpg"
  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = cards;
  }}
  alt="Дефолтное изображение"
/>
<div className={style.description}>
    <p className={style.name}>
        {item.name}
    </p>
    <button className={style.button} type="button"><img src={plus} alt="add card" /></button>
</div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        
    )
}