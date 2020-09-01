import React from 'react'
import Category from './Category'
import TableBody from '@material-ui/core/TableBody'

const CategoryList = (props) => {

  return (
    <TableBody>
      {
        props.categories.map(category => (
          <Category
            category={category}
            handleCategoryDelete={props.handleCategoryDelete}
            handleCategoryEdit={props.handleCategoryEdit}
            cancelUpdate={props.cancelUpdate}
            updateCategory={props.updateCategory}
            handleInputChange={props.handleInputChange}
            updatedCategory={props.updatedCategory}
            handleCategorySave={props.handleCategorySave}
          />
        ))
      }
    </TableBody>
  )
}

export default CategoryList