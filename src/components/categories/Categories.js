import React from 'react'
import Container from '@material-ui/core/Container'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import { connect } from 'react-redux'
import { GET_CATEGORIES, POST_CATEGORIES, DELETE_CATEGORIES, EDIT_CATEGORY, CANCEL_CATEGORY_UPDATE, PUT_CATEGORY } from '../../redux/actions'
import CategoryList from './CategoryList'
import CategoryForm from './CategoryForm'
import SearchBox from '../search-box/SearchBox'

class Categories extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      categoryForm: {
        name: '',
        status: ''
      },
      searchField: '',
      updatedCategory: ''
    }
  }

  componentDidMount() {
    this.props.getCategories()
  }

  handleInputChange = e => {
    const { id, value } = e.target
    const { categoryForm } = this.state

    this.setState({
      categoryForm: {
        ...categoryForm,
        [id]: value
      }
    })
  }

  handleCategorySave = e => {
    e.preventDefault();
    const {
      categoryForm: {
        name,
        status
      }
    } = this.state
    const { addCategory } = this.props

    addCategory({
      name,
      status
    })

    this.setState({
      categoryForm: {
        name: '',
        status: ''
      }
    })
  }

  handleCategoryDelete = category => {
    this.props.deleteCategory(category.id)
  }

  handleCategoryEdit = category => {
    this.props.editCategory(category.id)
    console.log('edit', category)
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value })
  }

  updateCategory = category => {
    this.props.updateCategory(category)
  }

  cancelUpdate = category => {
    this.props.cancelUpdate(category.id)
  }

  render() {
    const { categoryForm, searchField } = this.state
    const { categories } = this.props

    const searchedCategory = categories.filter(({ name }) =>
      name.includes(searchField)
    )
    console.log('categories', this.props)
    return (
      <Container>
        <SearchBox
          handleSearch={this.handleSearch}
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
              <CategoryList
                categories={searchedCategory}
                handleCategoryDelete={this.handleCategoryDelete}
                handleCategoryEdit={this.handleCategoryEdit}
                updateCategory={this.updateCategory}
                cancelUpdate={this.cancelUpdate}
                handleInputChange={this.handleInputChange}
                updatedCategory={this.state.updatedCategory}
                handleCategorySave={this.handleCategorySave}
              />
          </Table>
        </TableContainer>
        <hr />
        <CategoryForm
          handleInputChange={this.handleInputChange}
          categoryForm={categoryForm}
          handleCategorySave={this.handleCategorySave}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch({ type: GET_CATEGORIES })
    },
    addCategory: (category) => {
      dispatch({ type: POST_CATEGORIES, value: category })
    },
    deleteCategory: (id) => {
      dispatch({ type: DELETE_CATEGORIES, value: id})
    },
    editCategory: (id) => {
      dispatch({ type: EDIT_CATEGORY, value: id })
    },
    updateCategory: (category) => {
      console.log('dispatch an update', category)
      dispatch({ type: PUT_CATEGORY, value: category})
    },
    cancelUpdate: (id) => {
      dispatch({ type: CANCEL_CATEGORY_UPDATE, value: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Categories)