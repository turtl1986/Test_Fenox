import style from './cart.module.css'
import card from '../../shared/bd/card.json'
import cards from '../../assets/card.jpg'
import plus from '../../assets/plus.svg'


export function Card(){
    return(
        <div className={style.container}>
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