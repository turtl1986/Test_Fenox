import style from './partner.module.css'
import partners from '../../assets/partner.jpg'
import partner from '../../shared/bd/partner.json'


export function Partner(){
    return(
        <div className={style.container}>
            <div className={style.partner__container}>
            {
                partner.map(item=>{
                    return (
                        <div key={item.id} className={style.card}>
                                                    <img
  src="https://example.com/image.jpg"
  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = partners;
  }}
  alt="partner"
/>
<div className={style.relotion}>
    <p className={style.name}>
        {item.name}
    </p>
    <p className={style.description}>
        {item.description}
    </p>
    <a className={style.link} href={item.url}>сайт</a>
</div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        
    )
}