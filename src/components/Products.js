import React from 'react'
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
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '@material-ui/core/Container'
import { GET_PRODUCTS, POST_PRODUCT, DELETE_PRODUCT } from '../redux/actions'
import { connect } from 'react-redux'

class Products extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.props.getProducts();
  }

  inputChange = (event, field) => {
    this.setState({ [field]: event.target.value })
  }

  addProduct = () => {
    this.props.addProduct({ name: this.state.name, categories: this.state.categories, price: this.state.price, stock: this.state.stock, status: this.state.status })
  }

  deleteProduct = (product) => {
    this.props.deleteProduct(product.id)
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        <div>
          <TextField type='search' label='Search Product' style={{ marginRight: 10 }} />
          <TextField id='standard-select-category' select label='Category' helperText='Please select 1 category'>
            <MenuItem>
              Category 1
            </MenuItem>
            <MenuItem>
              Category 2
            </MenuItem>
            <MenuItem>
              Category 3
            </MenuItem>
          </TextField>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.props.products.map(product => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.categories}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.status}</TableCell>
                    <TableCell>
                      <ButtonGroup>
                        <Button
                          color='default'
                          startIcon={<EditIcon />}
                        >Edit</Button>
                        <Button
                          color='secondary'
                          startIcon={<DeleteIcon />}
                          onClick={() => this.deleteProduct(product)}
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
        <div>
          <h2>Add Product</h2>
          <TextField
            id='name'
            label='Product Name'
            onChange={(event) => this.inputChange(event, 'name')}
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='categories'
            label='Category'
            onChange={(event) => this.inputChange(event, 'categories')}
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='price'
            label='Price'
            onChange={(event) => this.inputChange(event, 'price')}
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='stock'
            label='Stock'
            onChange={(event) => this.inputChange(event, 'stock')}
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='status'
            label='Status'
            onChange={(event) => this.inputChange(event, 'status')}
            style={{ margin: 8 }}
          />
          <div>
            <Button color='primary' variant='contained' onClick={this.addProduct} style={{ margin: 10 }}>
              Add
            </Button>
          </div>
        </div>
      </Container>
    )
  }

}

const mapStateTopProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: GET_PRODUCTS });
    },
    addProduct: (product) => {
      dispatch({ type: POST_PRODUCT, value: product })
    },
    deleteProduct: (id) => {
      dispatch({ type: DELETE_PRODUCT, value: id})
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Products);
