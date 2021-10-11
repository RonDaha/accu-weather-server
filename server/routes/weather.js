import express from 'express'
import { ApiService } from '../services/ApiService'
import { CacheService } from '../services/CacheService'

const router = express.Router()

router.get('/auto-complete', async (req, res, next) => {

    const { query: { q } } = req
    console.info('Query to search -' , q)

    if (!q) {
        res.status(400)
        res.send({ message: 'Missing query params' })
        return
    }

    /* Try to get results from cache */
    let results = CacheService.get(q)
    if (!results) {
        /* Query the Api */
        console.info('No results on cache, querying from Api')
        results = await ApiService.getAutoCompleteData(q)
        CacheService.set(q, results)
    }

    res.status(200)
    res.send({ message: 'success', results })
})

router.get('/five-days-forecast', async (req, res, next) => {

    const { query: { locationKey } } = req
    console.info('locationKey -' , locationKey)

    if (!locationKey) {
        res.status(400)
        res.send({ message: 'Missing query params' })
        return
    }

    /* Try to get results from cache */
    let results = CacheService.get(locationKey)
    if (!results) {
        /* Query the Api */
        console.info('No results on cache, querying from Api')
        results = await ApiService.getFiveDaysForecasts(locationKey)
        CacheService.set(locationKey, results)
    }

    res.status(200)
    res.send({ message: 'success', results })
})

export default router

