import { Div, HourlyArr } from '../utilities/types'
import {
	elemCreator,
	appendElemToParent,
	addTextToElem,
	pipe,
} from '../utilities/element-creators'
import { renderHourlyCard } from './renderHourlyCard'

const renderHourly = function (hourly_: HourlyArr) {
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
