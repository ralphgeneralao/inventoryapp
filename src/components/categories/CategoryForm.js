import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const CategoryForm = (props) => {
  return (
    <div>
      <h2>New Category</h2>
      <TextField
        id='name'
        label='Category Name'
        value={props.categoryForm.name}
        onChange={props.handleInputChange}
        style={{ margin: 8 }}
      />
      <br />
      <TextField
        id='status'
        label='Status'
        value={props.categoryForm.status}
        onChange={props.handleInputChange}
        style={{ margin: 8 }}
      />
      <div>
        <Button color='primary' variant='contained' onClick={props.handleCategorySave} style={{ margin: 10 }}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default CategoryForm