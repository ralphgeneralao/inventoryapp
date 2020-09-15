import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const CategoryForm = (props) => {
  return (
    <div>
      <h2>New Category</h2>
      <form onSubmit={props.handleCategorySave}>
        <TextField
          required
          id='name'
          label='Category Name'
          value={props.categoryForm.name}
          onChange={props.handleInputChange}
          style={{ margin: 8 }}
        />
        <br />
        <TextField
          required
          id='status'
          label='Status'
          value={props.categoryForm.status}
          onChange={props.handleInputChange}
          style={{ margin: 8 }}
        />
        <div>
          <Button type='submit' color='primary' variant='contained' style={{ margin: 10 }}>
            Add
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CategoryForm