import style from './partner.module.css'
import partner from '../../shared/bd/partner.json'


export function Partner(){
    return(
        <div>
            {
                partner.map(item=>{
                    return (
                        <div key={item.id}>
                                                    <img
  src="https://example.com/image.jpg"
  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://th.bing.com/th/id/OIP.zA2Hgwtlt6IJOfEGXzfwwwHaHa?rs=1&pid=ImgDetMain';
  }}
  alt="Дефолтное изображение"
/>
<div>
    <p>
        {item.name}
    </p>
    <p>
        {item.description}
    </p>
    <a href={item.url}>сайт</a>
</div>
                        </div>
                    )
                })
            }
        </div>
    )
}