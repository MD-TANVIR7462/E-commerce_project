import express from 'express'
import { productControler } from './product.controler'
const router = express.Router()

router.post("/", productControler.createProduct)
router.get('/',productControler.getProducts)
router.get('/:id',productControler.getSingleProducts)
router.delete('/:id',productControler.getSingleProducts)




export const productRoutes = router