import { renderCurrent } from '../components/renderCurrent'
import { renderDaily } from '../components/renderDaily'
import { renderHourly } from '../components/renderHourly'
import {
	Current,
	DailyArr,
	GeoData,
	HourlyArr,
	Minutely,
	TimeZone,
	WeatherData,
} from '../utilities/types'

const fetchWeatherData = async function (cityName_: string) {
	const apiKey = '10869cf72314716d5dac69e49cfcb7b7'

	const geoResponse = await fetch(
		`https://api.openweathermap.org/geo/1.0/direct?q=${cityName_}&limit=1&appid=${apiKey}`
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

	const current: Current = weatherData.current
	const hourly: HourlyArr = weatherData.hourly
	const daily: DailyArr = weatherData.daily

	//render
	renderCurrent(latAndLongObj, current, hourly)
	renderHourly(hourly)
	renderDaily(daily)
}
export { fetchWeatherData }
