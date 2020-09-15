import React from 'react'
import Add from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NativeSelect from '@material-ui/core/NativeSelect'

const OrderForm = ({ handleInputOrder, products, orderForm, handleSaveOrder }) => {
  const { name, quantity } = orderForm
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper style={{ padding: 10 }}>
          <h2>New Order</h2>
          <form onSubmit={handleSaveOrder}>
            <TextField
              required
              id='name'
              label='Recipient'
              value={name}
              onChange={handleInputOrder}
            />
            <br />
            <h3>Product</h3>
            <NativeSelect id='product' onChange={handleInputOrder} style={{ width: 201, marginTop: 10 }}>
              <option disabled selected>Select Product</option>
              {
                products.map(({ id, name }) => (
                  <option key={id} value={name}>{name}</option>
                ))
              }
            </NativeSelect>
              <p></p>
              <TextField
                required
                id='quantity'
                label='Quantity'
                type='number'
                defaultValue='0'
                value={quantity}
                onChange={handleInputOrder}
              />
              <p></p>
              <TextField
                disabled
                id='subTotal'
                label='Sub-Total'
                defaultValue='0'
                type='number'
              />
            <br />
            <p></p>
            <div>
              <Button
                variant='outlined'
                size='large'
                color='primary'
                startIcon={<Add />}
              >
                Add Product
              </Button>
            </div>
            <p></p>
            <TextField
              disabled
              id='total'
              label='Total Amount'
              defaultValue='0'
              type='number'
            />
            <div>
              {
                products.length > 0 ?
                <Button type='submit' color='primary' variant='contained' style={{ margin: 10 }}>
                  Order
                </Button> :
                <Button disabled color='primary' variant='contained' style={{ margin: 10 }}>
                  Order
                </Button>
              }
            </div>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          <Grid item xs>
            <Typography>
              <h3 align='center'>My Online Store</h3>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default OrderForm