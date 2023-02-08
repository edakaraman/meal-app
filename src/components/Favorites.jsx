import { useGlobalContext } from "../context"
import {FcDislike} from "react-icons/fc"
const Favorites = () => {
    const {favorites,selectMeal,removeFromFavorites} = useGlobalContext()
    return (
        <section className="favorites">
          <div className="favorites_content">
            <h2> <b> Favorites  </b> </h2>
            <div className="favorites_container">
                {favorites.map((item) => {
                  const {idMeal ,strMealThumb:image} = item
                  return (
                    <div className="favorites_item" key={idMeal}>
                      <img src={image} onClick={() => selectMeal(idMeal,true)} className="favorites_img" /> <br/>
                      <button className="btn_remove" onClick={() => removeFromFavorites(idMeal)}> <FcDislike size={28}/> </button>                 
                    </div>
                  )
                })}
            </div>
          </div>
        </section> 
    )
}
export default Favorites