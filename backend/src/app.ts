
import express from 'express'
import globalErrorHandler from './middlewares/globleErrorHangler'
import noteRoute from './note/noteRoute'
import cors from 'cors'
import envConfig from './config/config'

const app = express()
app.use(express.json())
app.use(cors({
    origin:envConfig.frontend
}))

app.use("/api/notes",noteRoute)
app.use(express.static("./src/uploads/"))

app.use(globalErrorHandler)
export default app