import { watchGetProducts, watchPostProduct, watchDeleteProduct } from './products';
import { watchGetCategories, watchCancelCategoryUpdate, watchDeleteCategories, watchEditCategory, watchPostCategories, watchPutCategories } from './categories'
import { watchGetOrders, watchPostOrder, watchDeleteOrder } from './orders'

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
    watchPostOrder(),
    watchDeleteOrder()
  ]
  console.log('root saga')
}