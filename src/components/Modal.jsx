import { useGlobalContext } from "../context";
import {BiLinkExternal} from "react-icons/bi"

const Modal = () => {
    const {selectedMeal,closeModal} = useGlobalContext();
    const {strMealThumb:image,strMeal:title,strInstructions:text,strSource:source} = selectedMeal
  return (
    <aside className="modal_overlay">
      <div className="modal_container">
        <img src={image} alt={title} className="modal_img"/>
           <div className="modal_content">
           <h4>{title}</h4>
           <p> <b> Cooking Instructions </b> </p>
           <p> {text} </p>
           <a href={source} target="_blank"> <BiLinkExternal size={25}/> </a>
           </div>
        <button className ="btn_close" onClick={closeModal}>Close</button>
      </div>
    </aside>
  );
};
export default Modal;
