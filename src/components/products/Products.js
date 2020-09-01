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
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import { GET_PRODUCTS, POST_PRODUCT, DELETE_PRODUCT, GET_CATEGORIES } from '../../redux/actions'
import { connect } from 'react-redux'

class Products extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productForm: {
        name: '',
        price: '',
        stock: '',
        status: ''
      }
    }
  }

  componentDidMount() {
    const { getProducts, getCategories } = this.props

    getProducts();
    getCategories();
  }

  handleInputChange = e => {
    const { id, value } = e.target
    const { productForm } = this.state

    this.setState({
      productForm: {
        ...productForm,
        [id]: value
      }
    })
  }

  handleSave = e => {
    e.preventDefault()
    const { productForm } = this.state
    const { name, categories, price, stock, status } = productForm
    const { addProduct } = this.props

    addProduct({
      name,
      categories,
      price,
      stock,
      status
    })

    this.setState({
      productForm: {
        name: '',
        categories,
        price: '',
        stock: '',
        status: ''
      }
    })
  }

  handleDelete = product => {
    const { deleteProduct } = this.props

    deleteProduct(product.id)
  }

  render() {
    const { productForm } = this.state
    const { name, price, stock, status } = productForm
    const { products } = this.props

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
                products.map(product => {
                  const { id, name, categories, price, stock, status } = product
                  return (
                    <TableRow key={id}>
                      <TableCell>{name}</TableCell>
                      <TableCell>{categories}</TableCell>
                      <TableCell>{price}</TableCell>
                      <TableCell>{stock}</TableCell>
                      <TableCell>{status}</TableCell>
                      <TableCell>
                        <ButtonGroup>
                          <Button
                            color='default'
                            startIcon={<EditIcon />}
                          >Edit</Button>
                          <Button
                            color='secondary'
                            startIcon={<DeleteIcon />}
                            onClick={() => this.handleDelete(product)}
                          >
                            Delete
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <hr />
        <div>
          <h2>Add Product</h2>
          <FormControl>
            <TextField
              id='name'
              label='Product Name'
              value={name}
              onChange={this.handleInputChange}
              style={{ margin: 8 }}
            />
            <br />
            <NativeSelect id='categories' onChange={this.handleInputChange}>
              <option disabled selected>Select Category</option>
              {
                this.props.categories.map(({ id, name }) => (
                  <option key={id} value={name}>{name}</option>
                ))
              }
            </NativeSelect>
            <br />
            <TextField
              id='price'
              label='Price'
              value={price}
              type='number'
              onChange={this.handleInputChange}
              style={{ margin: 8 }}
            />
            <br />
            <TextField
              id='stock'
              label='Stock'
              value={stock}
              type='number'
              onChange={this.handleInputChange}
              style={{ margin: 8 }}
            />
            <br />
            <TextField
              id='status'
              label='Status'
              value={status}
              onChange={this.handleInputChange}
              style={{ margin: 8 }}
            />
            <div>
              <Button color='primary' variant='contained' onClick={this.handleSave}>
                Add
              </Button>
            </div>
          </FormControl>
        </div>
      </Container>
    )
  }

}

const mapStateTopProps = (state) => {
  return {
    products: state.products,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: GET_PRODUCTS });
    },
    getCategories: () => {
      dispatch({ type: GET_CATEGORIES })
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
