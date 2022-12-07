import { useState } from 'react';
function Search(props) {

  const [searchTerm,setSearchTerm] = useState("")
  


  return (
    <div>
        <label>Search: </label>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            props.search(e.target.value)
          }}
        />
    </div>
  );
}

export default Search;
