import { GeoData } from '../utilities/types'
import { fetchWeatherData } from './fetchWeatherData'

const handleSearchCitySubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	ev.preventDefault()

	const formSearchCityData = new FormData(this)
	const inputSearchCity = formSearchCityData.get('search-city').toString()

	fetchWeatherData(inputSearchCity)
}
export { handleSearchCitySubmit }
