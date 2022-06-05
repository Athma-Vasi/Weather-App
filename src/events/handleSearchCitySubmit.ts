import { fetchWeatherData } from './fetchWeatherData'

const handleSearchCitySubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	ev.preventDefault()

	const formSearchCityData = new FormData(this)
	const inputSearchCity = formSearchCityData.get('search-city').toString()

	fetchWeatherData(inputSearchCity)
}
export { handleSearchCitySubmit }
