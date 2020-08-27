import React, { PureComponent } from 'react'
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
import Axios from 'axios'
import { GET_PRODUCTS } from '../redux/actions'
import { connect } from 'react-redux'

class Products extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    console.log('componentdidmount', this.props)
  }
  render() {
    console.log('products', this)
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
            
             
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button
                      color='default'
                      startIcon={<EditIcon />}
                    >Edit</Button>
                    <Button
                      color='secondary'
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            
            </TableBody>
          </Table>
        </TableContainer>
        <hr />
        <div>
          <h2>Add Product</h2>
          <TextField
            id='standard-full-width'
            label='Product Name'
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='standard-full-width'
            label='Category'
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='standard-full-width'
            label='Price'
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='standard-full-width'
            label='Stock'
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            id='standard-full-width'
            label='Status'
            style={{ margin: 8 }}
          />
          <div>
            <Button color='primary' variant='contained' style={{ margin: 10 }}>
              Add
            </Button>
          </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch({ type: GET_PRODUCTS })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)