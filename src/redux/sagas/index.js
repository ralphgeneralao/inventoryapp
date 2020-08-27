import { watchGetProducts, watchPostProduct, watchPutProduct, watchDeleteProduct, watchEditProduct } from './products'

export default function* () {
  yield [
    watchGetProducts(),
    watchPostProduct(),
    watchPutProduct(),
    watchDeleteProduct(),
    watchEditProduct()
  ]
  console.log('root saga')
}