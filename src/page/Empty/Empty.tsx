import { useNavigate } from "react-router-dom"
import error from '../../assets/image/404 Error.jpg'
export function Empty(){
    const navigate=useNavigate()

    return(
        <div >
         <button onClick={()=>navigate('/')}>
            Empty
        </button>
        <img src={error} alt="error 404" />
        </div>
       
    )
}