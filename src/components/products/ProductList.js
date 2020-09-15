import React from 'react'
import Product from './Product'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const ProductList = ({ products, handleDelete }) => {
  return (
    <TableBody>
      {
        products.length > 0 ?
          products.map(product =>
            <TableRow key={product.id}>
              <Product
                product={product}
                handleDelete={handleDelete}
              />
            </TableRow>
          ) :
          <TableRow>
            <TableCell>No Product found.</TableCell>
          </TableRow>
      }
    </TableBody>
  )
}

export default ProductList