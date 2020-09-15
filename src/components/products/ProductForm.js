import React from 'react'
import TextField from '@material-ui/core/TextField'
import NativeSelect from '@material-ui/core/NativeSelect'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core'

const ProductForm = ({ productForm, handleInputChange, handleSave, categories }) => {
  const { name, price, stock, status } = productForm

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper style={{ padding: 10 }}>
        <h2>Add Product</h2>
          <form onSubmit={handleSave}>
            <TextField
              required
              id='name'
              label='Product Name'
              value={name}
              onChange={handleInputChange}
            />
            <br />
            <NativeSelect label='select' id='categories' onChange={handleInputChange} style={{ width: 201, marginTop: 10 }} required>
              <option />
              {
                categories.map(({ id, name }) => (
                  <option key={id} value={name}>{name}</option>
                ))
              }
            </NativeSelect>
            {/* <TextField
              id='categories'
              select
              label='Select Category'
              onChange={handleInputChange}
              style={{ width: 201 }}
            >
              <option />
              {
                categories.map(({ id, name }) => (
                  <option key={id} value={name}>{name}</option>
                ))
              }
            </TextField> */}
            <br />
            <TextField
              required
              id='price'
              label='Price'
              value={price}
              type='number'
              onChange={handleInputChange}
            />
            <br />
            <TextField
              required
              id='stock'
              label='Stock'
              value={stock}
              type='number'
              onChange={handleInputChange}
            />
            <br />
            <TextField
              required
              id='status'
              label='Status'
              value={status}
              onChange={handleInputChange}
            />
            <div style={{ marginTop: 20 }}>
              {
                categories.length > 0 ?
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                >
                  Add
                </Button> :
                <Button
                  disabled
                  color='primary'
                  variant='contained'
                >
                  Add
                </Button>
              }
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ProductForm
