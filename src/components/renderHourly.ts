import { Div, Hourly, HourlyArr } from '../utilities/types'
import {
	elemCreator,
	appendElemToParent,
	addTextToElem,
	addAttributeToElem,
	createImage,
	addEvtListener,
	addStyleToElem,
	pipe,
} from '../utilities/element-creators'
import { renderHourlyCard } from './renderHourlyCard'

const renderHourly = function (hourly_: HourlyArr) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	const temp = {
		dt: 1654279200,
		temp: 18.69,
		feels_like: 18.02,
		pressure: 1018,
		humidity: 54,
		dew_point: 9.2,
		uvi: 0.51,
		clouds: 84,
		visibility: 10000,
		wind_speed: 5.37,
		wind_deg: 63,
		wind_gust: 8.13,
		weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
		pop: 0.02,
	}

	const now = new Date()
	let hoursTime = now.getHours()
	hoursTime = hoursTime < 12 ? hoursTime : hoursTime - 12

	const hourlyContainer: Div = document.querySelector('.hourlyContainer')

	const ul = elemCreator('ul')(['hourly', 'carousel-ul'])
	appendElemToParent(hourlyContainer)(ul)

	//render hourly cards
	hourly_.forEach((hourInfo, index) => {
		renderHourlyCard(hourInfo, ul, index, hoursTime)
	})
}
export { renderHourly }
