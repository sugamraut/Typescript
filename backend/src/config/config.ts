import {config} from 'dotenv'
config()

const envConfig = {
    port : process.env.PORT, 
    mongodbString : process.env.MONGODB_URI,
    environment:process.env.Node_ENV,
    frontend:process.env.FRONTEND_URL
}

export default envConfig
