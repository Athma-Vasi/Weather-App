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

	const tempHourly = {
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
	let hours = now.getHours()
	let hoursTime: [number, string] = [hours, `${hours < 13 ? 'AM' : 'PM'}`]

	const hourlyContainer: Div = document.querySelector('.hourlyContainer')

	//remove previously rendered contents
	const hourlyContainerChild: Div = document.querySelector('.hourlyContainerInner')
	if (hourlyContainerChild) hourlyContainerChild.remove()

	pipe(
		addTextToElem('48 hr forecast'),
		appendElemToParent(hourlyContainer)
	)(elemCreator('p')(['hourly', 'hourly-heading']))

	//render new contents
	const hourlyContainerInner = elemCreator('div')(['hourly', 'hourlyContainerInner'])
	appendElemToParent(hourlyContainer)(hourlyContainerInner)

	const ul = elemCreator('ul')(['hourly', 'hourly-ul'])
	appendElemToParent(hourlyContainerInner)(ul)

	//render hourly cards
	hourly_.forEach((hourInfo, index) => {
		renderHourlyCard(hourInfo, ul, index, hoursTime)
	})
}
export { renderHourly }