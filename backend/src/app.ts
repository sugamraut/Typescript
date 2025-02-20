
import express from 'express'
import globalErrorHandler from './middlewares/globleErrorHangler'

const app = express()

app.use(globalErrorHandler)
export default app