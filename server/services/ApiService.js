import { ErrorService } from './ErrorService'
import { ApiError } from '../errors'
import { HttpService } from './HttpService'

/* Would move to ENV on real app, left it here to simplify the review */
const apiKey = 'arViOmv4duhKEPyUQtcZ1na6Sf5Swd1q'
const urls = {
    base: 'http://dataservice.accuweather.com',
    autoComplete: '/locations/v1/cities/autocomplete',
    fiveDaysForecasts: '/forecasts/v1/daily/5day/locationKey',
}

export const ApiService = {
    async getAutoCompleteData(q) {
        try {
            const requestUrl = `${urls.base + urls.autoComplete}?apikey=${apiKey}&q=${q}`
            return HttpService.makeGetRequest(requestUrl)
        } catch (e) {
            ErrorService.handleError(e, ApiError.getAutoCompleteData)
            return []
        }
    },
    async getFiveDaysForecasts(locationKey) {
        try {
            const requestUrl = `${urls.base + urls.fiveDaysForecasts}?apikey=${apiKey}&LocationKey=${locationKey}`
            return HttpService.makeGetRequest(requestUrl)
        } catch (e) {
            ErrorService.handleError(e, ApiError.getAutoCompleteData)
            return {}
        }
    },
}
