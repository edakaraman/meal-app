import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = () => {
    const [text,setText] = useState("")
    const { setSearchTerm,fetchRandomMeal} = useGlobalContext()

    const handleChange = (e) =>{
      setText(e.target.value)
    }

    const handleSubmit = (e) =>{
    e.preventDefault()
    if(text){
      setSearchTerm(text)
      setText("")
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm("")
    setText("")
    fetchRandomMeal();
  }
  
    return (
        <header className="search_container">
          <form onSubmit={handleSubmit} >
            <input type="text" onChange = {handleChange} value={text} placeholder="type favorite meal" className="form_input"></input>
            <button type="submit" className='btn_search'>Search</button>
            <button type="button" className ="btn_random" onClick={handleRandomMeal}> Suprise Me! </button>          
          </form>
        </header>
    )
}
export default Search