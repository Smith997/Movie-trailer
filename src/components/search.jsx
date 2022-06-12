import React from 'react';
import styled from 'styled-components';


function Search() {
  return (
    <SearchBar>
        <h2>Movie App</h2>
        <form>            
            <input type="text" placeholder='Type movie name here!' />
        </form>
    </SearchBar>
  )
}

const SearchBar = styled.div`
    margin: 10px auto;
    padding: 0 20px;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;   
    align-items: center;
    input{
        padding: 5px 10px;
        width: 220px;
        outline: none;
        font-size: 16px;
        border-radius: 5px;
        border: none;
    }
    h2{
        color: #fb923c;
    }
`

export default Search