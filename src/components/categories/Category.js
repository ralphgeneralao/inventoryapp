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
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

const Category = (props) => {
  const [open, setOpen] = React.useState(false)
  
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  console.log('@category', props)
  return (
    <>
      <TableRow>
        <TableCell>{props.category.name}</TableCell>
        <TableCell>{props.category.status}</TableCell>
        <TableCell>
          <ButtonGroup>
            <Button
              color='default'
              startIcon={<EditIcon />}
              onClick={handleClickOpen}
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

      <Dialog disableBackdropClick disableEscapeKeyDown open={open}>
        <DialogTitle>Update Category</DialogTitle>
        <form>
          <TextField
            required
            id='newCatName'
            label='Category Name'
            // value={props.newCategory.newCatName}
            defaultValue={props.category.name}
            onChange={props.handleInputChange}
          />
          <br />
          <TextField
            required
            id='status'
            label='Status'
            // value={props.categoryForm.status}
            defaultValue={props.category.status}
            onChange={props.handleInputChange}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={props.updateCategory} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Category