import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { connect } from 'react-redux'
import { GET_PRODUCTS, POST_ORDER, GET_ORDERS, DELETE_ORDER } from '../../redux/actions'
import OrderForm from './OrderForm'
import OrderList from './OrderList'

class Orders extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      orderForm: {
        name: '',
        quantity: '',
        productOrder: ''
      }
    }
  }

  componentDidMount() {
    const { getOrders, getProducts } = this.props
      getOrders()
      getProducts()
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
    const { name, productOrder, total } = orderForm

    this.props.addOrder({
      name,
      productOrder,
      total
    })

    this.setState({
      orderForm: {
        name: '',
        quantity: '',
        productOrder
      }
    })
  }

  handleOrderDelete = order => {
    this.props.deleteOrder(order.id)
  }

  render() {
    const { products, orders } = this.props
    const { orderForm } = this.state
    
  return (
    <Container>
      <div style={{ marginTop: '20px' }}>
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
          <OrderList
            orders={orders}
            handleOrderDelete={this.handleOrderDelete}
          />
        </Table>
      </TableContainer>
      <hr />
      <OrderForm
        products={products}
        handleInputOrder={this.handleInputOrder}
        orderForm={orderForm}
        handleSaveOrder={this.handleSaveOrder}
      />
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
    },
    deleteOrder: (id) => {
      dispatch({ type: DELETE_ORDER, value: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Orders)