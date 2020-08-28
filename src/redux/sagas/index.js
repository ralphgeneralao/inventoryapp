import { watchGetProducts, watchPostProduct, watchDeleteProduct } from './products';
import { watchGetCategories, watchPostCategories, watchDeleteCategories } from './categories'

export default function* () {
  yield [
    watchGetProducts(),
    watchPostProduct(),
    watchDeleteProduct(),
    watchGetCategories(),
    watchPostCategories(),
    watchDeleteCategories()
  ]
  console.log('root saga')
}