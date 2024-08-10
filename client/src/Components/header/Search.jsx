import React from 'react'
  import {InputBase,Box,styled} from'@mui/material'
  import SearchIcon from '@mui/icons-material/Search';

  const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;


const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;
const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase
       placeholder="Search for products, brands and more"
      />
      <SearchIconWrapper>
      <SearchIcon/>
      </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search