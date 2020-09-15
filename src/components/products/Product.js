import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Dialog, DialogTitle, DialogActions } from '@material-ui/core'

const Product = ({ product, handleDelete }) => {
  const { id, name, categories, price, stock, status } = product
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <>
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
            onClick={handleClickOpen}
          >Edit</Button>
          <Button
            color='secondary'
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(product)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>

      <Dialog disableBackdropClick disableEscapeKeyDown open={open} >
        <DialogTitle>Update Product</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Product