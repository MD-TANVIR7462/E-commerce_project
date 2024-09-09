import express from 'express'
import { productControler } from './product.controler'
const router = express.Router()

router.post("/", productControler.createProduct)
router.get('/allproducts', productControler.getProducts)
router.get('/:id', productControler.getSingleProducts)
router.get('/',productControler.searchProduct)
router.delete('/:id', productControler.deleteProducts)
router.put('/:id', productControler.updateProduct)




export const productRoutes = router