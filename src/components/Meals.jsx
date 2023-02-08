import React from "react"
import { useGlobalContext } from "../context"
import {FcLike} from "react-icons/fc"

const Meals = () => {
    const {meals,loading,selectMeal,addToFavorites} = useGlobalContext()

   if(loading){
    return(
      <section className="section">
        <h5> Loading ...</h5>
      </section>
    )
   }
   if(meals.length <1){
    return(
      <section className="section">
       <h2> No meals matched your searched term.Please try again.</h2>
      </section>
    )
   }

    return <section className="section_center">
             {meals.map((singleMeal) => {
               const {idMeal,strMeal:title,strMealThumb:image} = singleMeal
               return <article key={idMeal} className="single_meal">
                <img src={image} className="img" onClick={() => selectMeal(idMeal)} />
                <footer>
                  <h4> {(title).substring(0,16)} </h4>
                  <button onClick={() => addToFavorites(idMeal)}  className="like_btn"> <FcLike/> </button>
                </footer>
               </article>
             })}
        </section>  
}
export default Meals
