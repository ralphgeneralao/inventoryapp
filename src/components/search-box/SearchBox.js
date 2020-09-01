import React from 'react'
import TextField from '@material-ui/core/TextField'

const SearchBox = (props) => (
  <TextField
    type='search'
    label='Search Category'
    onChange={props.handleSearch}
  />
)

export default SearchBox