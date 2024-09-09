import express, { Request, Response } from 'express'
import { productRoutes } from './app/modules/products/product.route'
const app = express()
const cors = require('cors')
//parser 
app.use(cors())
app.use(express.json())


//routes
app.use('/api/v1/products',productRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app