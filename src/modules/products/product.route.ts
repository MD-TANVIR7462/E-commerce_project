import express from 'express'
import { productControler } from './product.controler'
const router = express.Router()

router.post("/", productControler.createProduct)




export const productRoutes = router