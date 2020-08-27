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

export default function Categories() {
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
              <TableRow>
                <TableCell>Drink</TableCell>
                <TableCell>Active</TableCell>
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
          <h2>New Category</h2>
          <TextField
            id='standard-full-width'
            label='Category Name'
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
