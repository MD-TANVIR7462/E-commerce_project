import express from 'express'
import { productControler } from './product.controler'
const router = express.Router()

router.post("/", productControler.createProduct)
router.get('/', productControler.getProducts)
router.get('/:id', productControler.getSingleProducts)
router.delete('/:id', productControler.deleteProducts)
router.patch('/:id', productControler.updateProduct)




export const productRoutes = router