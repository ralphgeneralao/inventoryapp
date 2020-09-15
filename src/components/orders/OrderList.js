import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Order from './Order'

 const OrderList = (props) => {
  const { orders, handleOrderDelete } = props
  return (
    <TableBody>
      {
        orders.length > 0 ?
          orders.map(order => (
            <TableRow key={order.id}>
              <Order order={order} handleOrderDelete={handleOrderDelete} />
            </TableRow>
          )) :
          <TableCell>No Order found.</TableCell>
      }
    </TableBody>
  )
}

export default OrderList