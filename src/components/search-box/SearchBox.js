import React from 'react'
import TextField from '@material-ui/core/TextField'

const SearchBox = ({ placeholder, handleSearch }) => (
  <TextField
    type='search'
    placeholder={placeholder}
    onChange={handleSearch}
  />
)

export default SearchBox