import { watchGetProducts, watchPostProduct, watchDeleteProduct } from './products';
import { watchGetCategories, watchPostCategories, watchDeleteCategories, watchEditCategory, watchCancelCategoryUpdate, watchPutCategories } from './categories'
import { watchGetOrders, watchPostOrder } from './orders'

export default function* () {
  yield [
    watchGetProducts(),
    watchPostProduct(),
    watchDeleteProduct(),
    watchGetCategories(),
    watchPostCategories(),
    watchDeleteCategories(),
    watchEditCategory(),
    watchCancelCategoryUpdate(),
    watchPutCategories(),
    watchGetOrders(),
    watchPostOrder()
  ]
  console.log('root saga')
}