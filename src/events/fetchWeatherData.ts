import { renderCurrent } from '../components/renderCurrent'
import { renderHourly } from '../components/renderHourly'
import {
	Current,
	Daily,
	DailyArr,
	GeoData,
	Hourly,
	HourlyArr,
	Minutely,
	TimeZone,
	WeatherData,
} from '../utilities/types'

const fetchWeatherData = async function (cityName_: string) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	const apiKey = '10869cf72314716d5dac69e49cfcb7b7'

	const geoResponse = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${cityName_}&limit=1&appid=${apiKey}`
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

	const weatherResponse = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${latAndLongObj.lat}&lon=${latAndLongObj.lon}&units=metric&appid=${apiKey}`
	)

	const weatherData: WeatherData = await weatherResponse.json()
	JSON.stringify(weatherData)

	const current: Current = weatherData.current
	const minutely: Minutely = weatherData.minutely
	const hourly: HourlyArr = weatherData.hourly
	const daily: DailyArr = weatherData.daily
	const timezone: TimeZone = {
		timezone: weatherData.timezone,
		timezone_offset: weatherData.timezone_offset,
	}

	//render current
	renderCurrent(latAndLongObj, current, hourly)
	renderHourly(hourly)
}
export { fetchWeatherData }
