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
import { connect } from 'react-redux'
import { GET_CATEGORIES, POST_CATEGORIES, DELETE_CATEGORIES } from '../../redux/actions'

class Categories extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      categoryForm: {
        name: '',
        status: ''
      }
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

  render() {
    console.log('@categories', this.props)
    return (
      <Container>
        <div>
          <TextField type='search' label='Search Category' />
        </div>
        <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  this.props.categories.map(category => (
                    <TableRow>
                      <TableCell>{category.name}</TableCell>
                      <TableCell>{category.status}</TableCell>
                      <TableCell>
                        <ButtonGroup>
                          <Button
                            color='default'
                            startIcon={<EditIcon />}
                          >Edit</Button>
                          <Button
                            color='secondary'
                            startIcon={<DeleteIcon />}
                            onClick={() => this.handleCategoryDelete(category)}
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
            <h2>New Category</h2>
            <TextField
              id='name'
              label='Category Name'
              value={this.state.categoryForm.name}
              onChange={this.handleInputChange}
              style={{ margin: 8 }}
            />
            <br />
            <TextField
              id='status'
              label='Status'
              value={this.state.categoryForm.status}
              onChange={this.handleInputChange}
              style={{ margin: 8 }}
            />
            <div>
              <Button color='primary' variant='contained' onClick={this.handleCategorySave} style={{ margin: 10 }}>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Categories)