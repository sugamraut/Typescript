
import express from 'express'
import globalErrorHandler from './middlewares/globleErrorHangler'
import noteRoute from './note/noteRoute'

const app = express()
app.use(express.json())
app.use("/api/notes",noteRoute)

app.use(globalErrorHandler)
export default app