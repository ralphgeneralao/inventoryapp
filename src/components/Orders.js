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
import Add from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function Orders() {
  return (
    <Container>
      <div>
        <TextField type='search' label='Search Order' />
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Recipient</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Person</TableCell>
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 10 }}>
            <Grid item xs={12} sm={6}>
              <h2>New Order</h2>
              <TextField
                id='standard-full-width'
                label='Recipient'
                style={{ margin: 8 }}
              />
              <br />
              <h3>Product</h3>
              <form noValidate>
                <TextField
                  select
                  label='Select product'
                  helperText='Select from available products'
                />
                <p></p>
                <TextField
                  id='standard-number'
                  label='Quantity'
                  type='number'
                  defaultValue='0'
                />
                <p></p>
                <TextField
                  disabled
                  id='standard-read-only-input'
                  label='Sub-Total'
                  defaultValue='0'
                  type='number'
                />
              </form>
              <br />
              <div>
                <Button
                  variant='outlined'
                  size='large'
                  color='primary'
                  startIcon={<Add />}
                >
                  Add Product
                </Button>
              </div>
              <p></p>
              <TextField
                disabled
                id='standard-read-only-input'
                label='Total Amount'
                defaultValue='0'
                type='number'
              />
              <div>
                <Button color='primary' variant='contained' style={{ margin: 10 }}>
                  Order
                </Button>
              </div>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Grid item xs>
              <Typography>
                <h3 align='center'>My Online Store</h3>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
