import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
/* Routes */
import weatherRouter from './routes/weather'
/* Services */
import { ErrorService } from './services/ErrorService'

const app = express()

/* Uncaught errors handling */
process.on('uncaughtException', (e) => {
    ErrorService.handleError(e)
    process.exit(-1)
})
process.on('unhandledRejection', (e) => {
    ErrorService.handleError(e)
    process.exit(-1)
})


const bootstrap = async () => {

    console.info('Init - start')
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(express.static(path.join(__dirname, '../public')))
    app.use(cors())

    /* Routes */
    const apiPreFix = 'api'
    app.use(`/${apiPreFix}/weather`, weatherRouter)

    console.info('Init - done')
}

bootstrap()

export default app
