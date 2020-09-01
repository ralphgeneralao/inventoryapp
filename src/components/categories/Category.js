import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import UpdateIcon from '@material-ui/icons/Update'
import CancelIcon from '@material-ui/icons/Cancel'
import TextField from '@material-ui/core/TextField'

const Category = (props) => {
  console.log('@categories', props.category)
  return (
    <>
      {
        props.category.editMode ?
          <TableRow>
            <TableCell>
              <TextField id='newName' defaultValue={props.category.name} onChange={props.handleInputChange} />
            </TableCell>
            <TableCell>
              <TextField value={props.category.status} />
            </TableCell>
            <TableCell>
            <ButtonGroup>
              <Button
                color='default'
                startIcon={<UpdateIcon />}
                onClick={() => props.updateCategory(props.category)}
              >Update</Button>
              <Button
                color='secondary'
                startIcon={<CancelIcon />}
                onClick={() => props.cancelUpdate(props.category)}
              >
                Cancel
              </Button>
            </ButtonGroup>
            </TableCell>
          </TableRow> :
        <TableRow>
          <TableCell>{props.category.name}</TableCell>
          <TableCell>{props.category.status}</TableCell>
          <TableCell>
            <ButtonGroup>
              <Button
                color='default'
                startIcon={<EditIcon />}
                onClick={() => props.handleCategoryEdit(props.category)}
              >Edit</Button>
              <Button
                color='secondary'
                startIcon={<DeleteIcon />}
                onClick={() => props.handleCategoryDelete(props.category)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </TableCell>
        </TableRow>
      }
    </>
  )
}

export default Category