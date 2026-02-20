import dotenv from 'dotenv'
dotenv.config()
const config = {
  mongoURI: process.env.MongoDB,
  port: process.env.PORT || 8080
}
export default config;