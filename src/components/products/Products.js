import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Container from '@material-ui/core/Container'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import { GET_PRODUCTS, POST_PRODUCT, DELETE_PRODUCT, GET_CATEGORIES } from '../../redux/actions'
import { connect } from 'react-redux'
import SearchBox from '../search-box/SearchBox'
import NativeSelect from '@material-ui/core/NativeSelect'

class Products extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productForm: {
        name: '',
        price: '',
        stock: '',
        status: '',
        categories: ''
      },
      categorySearch: '',
      searchField: ''
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

  handleSearch = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { productForm, searchField, categorySearch } = this.state
    const { products, categories } = this.props
    console.log(this.props)

    const searchedProduct = products.filter(({ name }) =>
      name.includes(searchField)
    )

    // const searchByCategory = categories.filter(({ name }) =>
    //   name.toLowerCase().includes(categorySearch.toLowerCase())
    // )

    return (
      <Container>
        <div style={{ marginTop: '20px' }}>
          <SearchBox
            placeholder='Search Product'
            handleSearch={this.handleSearch}
          />
          <NativeSelect style={{ marginLeft: '10px' }}>
            <option selected disabled>Search by category</option>
            {
              categories.map(category =>
                <option key={category.id} value={category.name}>{category.name}</option>
              )
            }
          </NativeSelect>
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
            <ProductList
              products={searchedProduct}
              handleDelete={this.handleDelete}
            />
          </Table>
        </TableContainer>
        <hr />
        <ProductForm
          productForm={productForm}
          handleInputChange={this.handleInputChange}
          handleSave={this.handleSave}
          categories={categories}
        />
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
