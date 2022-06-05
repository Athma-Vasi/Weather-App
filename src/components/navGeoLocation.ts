import { Current, DailyArr, GeoData, HourlyArr, WeatherData } from '../utilities/types'
import { renderCurrent } from './renderCurrent'
import { renderDaily } from './renderDaily'
import { renderHourly } from './renderHourly'

const navGeoLocation = async function () {
	const apiKey = '10869cf72314716d5dac69e49cfcb7b7'

	navigator.geolocation.getCurrentPosition(async (success) => {
		const { latitude, longitude } = success.coords

		const weatherResponse = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
		)

		const weatherData: WeatherData = await weatherResponse.json()

		const cityName = weatherData.timezone.split('/')[1]

		const geoResponse = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
		)

		const latAndLongResp = await geoResponse.json()

		const latAndLongObj = Object.fromEntries(
			latAndLongResp.reduce((acc: Map<string, string | number>, curr) => {
				acc.set('name', curr.name)
				acc.set('lat', curr.lat)
				acc.set('lon', curr.lon)
				acc.set('country', curr.country)
				acc.set('state', curr.state)
				return acc
			}, new Map())
		) as GeoData

		const current: Current = weatherData.current
		const hourly: HourlyArr = weatherData.hourly
		const daily: DailyArr = weatherData.daily

		//render
		renderCurrent(latAndLongObj, current, hourly)
		renderHourly(hourly)
		renderDaily(daily)
	})
}
export { navGeoLocation }
