import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { GET_PRODUCTS, POST_ORDER } from '../../redux/actions'
import NativeSelect from '@material-ui/core/NativeSelect'
import { GET_ORDERS } from '../../redux/actions'

class Orders extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      orderForm: {
        name: '',
        product: ''
      }
    }
  }

  componentDidMount() {
    const { getOrders, getProducts } = this.props
      getOrders()
      getProducts()
  }

  handleOrderSave = () => {

  }

  handleInputOrder = e => {
    const { id, value } = e.target
    const { orderForm } = this.state

    this.setState({
      orderForm: {
        ...orderForm,
        [id]: value
      }
    })
  }

  handleSaveOrder = e => {
    e.preventDefault()
    const { orderForm } = this.state
    const { name, product, total } = orderForm

    this.props.addOrder({
      name,
      product,
      total
    })
  }
  render() {
    const { products, orders } = this.props
    const { orderForm } = this.state
    console.log('orders', orders)
  return (
    <Container>
      <div>
        <TextField type='search' label='Search Order' />
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Recipient</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              orders.map(order => (
                <TableRow>
              <TableCell>{order.name}</TableCell>
              <TableCell>Aug. 26, 2020</TableCell>
              <TableCell>20</TableCell>
              <TableCell>
                <ButtonGroup>
                  <Button
                    color='default'
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <Button
                    color='secondary'
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 10 }}>
            <Grid item xs={12} sm={6}>
              <h2>New Order</h2>
              <FormControl>
                <TextField
                  id='name'
                  label='Recipient'
                  value={orderForm.name}
                  onChange={this.handleInputOrder}
                  style={{ margin: 8 }}
                />
                <br />
                <h3>Product</h3>
                <form noValidate>
                  <NativeSelect>
                    {
                      products.map(product => (
                        <option value={product.name}>{product.name}</option>
                      ))
                    }
                  </NativeSelect>
                  <p></p>
                  <TextField
                    id='quantity'
                    label='Quantity'
                    type='number'
                    defaultValue='0'
                  />
                  <p></p>
                  <TextField
                    disabled
                    id='subTotal'
                    label='Sub-Total'
                    defaultValue='0'
                    type='number'
                  />
                </form>
                <br />
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
                  <Button color='primary' variant='contained' onClick={this.handleSaveOrder} style={{ margin: 10 }}>
                    Order
                  </Button>
                </div>
              </FormControl>
            </Grid>
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
    </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => {
      dispatch({ type: GET_ORDERS })
    },
    getProducts: () => {
      dispatch({ type: GET_PRODUCTS })
    },
    addOrder: (order) => {
      dispatch({ type: POST_ORDER, value: order })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Orders)