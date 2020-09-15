import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell'
import { TableRow, TableBody } from '@material-ui/core'

class EditCategory extends PureComponent {
  handleCategoryUpdate = e => {
    e.preventDefault()

    const newName = this.getName.value
    const newStatus = this.getStatus.value

    const { category: { id }, handleCategoryUpdate } = this.props

    const data = {
      newName,
      newStatus,
      editMode: false
    }

    handleCategoryUpdate({
      id,
      data
    })
    console.log('@data', data)
  }
  render() {
    console.log('@@@@@@@@@@@@#####', this.props)
    return (
      <TableBody>
        <TableRow>
        <TableCell>
          <TextField
            required
            id='name'
            label='Category Name'
            ref={(input) => (this.getName = input)}
            defaultValue={this.props.category.name}
          />
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
          <TextField
            required
            id='status'
            label='Status'
            ref={(input) => (this.getStatus = input)}
            defaultValue={this.props.category.status}
          />
        </TableCell>
       <TableCell>
          <Button color='primary' variant='contained' style={{ margin: 10 }} onClick={this.handleCategoryUpdate}>Update</Button>
       </TableCell>
      </TableRow>
      </TableBody>
    )
  }
}

export default EditCategory