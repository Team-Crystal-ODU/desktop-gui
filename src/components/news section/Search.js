import React, {useState} from 'react'

const Search = () => {
    const [text, setText] = useState ('')
  return (
    <div>
        <form>
            <input type = "text" placeholder= "e.g Floods" />
            <button type = "submit">Search</button>
        </form>
    </div>
  )
}

export default Search