import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TableCell from '@material-ui/core/TableCell'

const Order = ({ order, handleOrderDelete }) => {
  const { name } = order
  return (
    <>
      <TableCell>{name}</TableCell>
      <TableCell>Aug. 26, 2020</TableCell>
      <TableCell>20</TableCell>
      <TableCell>
        <ButtonGroup>
          <Button
            color='default'
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            color='secondary'
            startIcon={<DeleteIcon />}
            onClick={() => handleOrderDelete(order)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>
    </>
  )
}

export default Order