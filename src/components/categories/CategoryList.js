import React from 'react'
import Category from './Category'
import TableBody from '@material-ui/core/TableBody'
import { TableCell } from '@material-ui/core'

const CategoryList = (props) => {

  return (
    <TableBody>
      {
        props.categories.length > 0 ?
        props.categories.map(category => (
          <Category
            category={category}
            handleCategoryDelete={props.handleCategoryDelete}
            handleCategoryEdit={props.handleCategoryEdit}
            cancelUpdate={props.cancelUpdate}
            updateCategory={props.updateCategory}
            handleInputChange={props.handleInputChange}
            handleCategorySave={props.handleCategorySave}
            newCategory={props.newCategory}
          />
        )) :
        <TableCell>No Category found.</TableCell>
      }
    </TableBody>
  )
}

export default CategoryList