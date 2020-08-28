import { watchGetProducts, watchPostProduct, watchDeleteProduct } from './products';

export default function* () {
  yield [
    watchGetProducts(),
    watchPostProduct(),
    watchDeleteProduct()
  ]
  console.log('root saga')
}