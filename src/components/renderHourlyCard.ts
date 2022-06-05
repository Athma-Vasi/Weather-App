import { Hourly } from '../utilities/types'
import {
	elemCreator,
	appendElemToParent,
	addTextToElem,
	createImage,
	pipe,
} from '../utilities/element-creators'
import { getHours } from './getHours'

const renderHourlyCard = function (
	hourly_: Hourly,
	container_: HTMLElement,
	index_: number,
	hours_: [number, string]
) {
	//capitalizes first letters of phrase
	const description = hourly_.weather[0].description.split(' ').reduce((acc, curr) => {
		curr = curr[0].toUpperCase() + curr.slice(1)
		acc = `${acc} ${curr}`
		return acc
	}, '')

	const li = elemCreator('li')(['hourly', `hourly-li${index_}`])
	appendElemToParent(container_)(li)

	const hourlyCard = elemCreator('div')(['hourly', 'hourly-card'])
	appendElemToParent(li)(hourlyCard)

	//grab the properly formatted 12-hr time
	const hoursTime = getHours(hours_, index_)

	pipe(
		addTextToElem(hoursTime),
		appendElemToParent(hourlyCard)
	)(elemCreator('h5')(['hourly', 'hourly-time']))

	pipe(appendElemToParent(hourlyCard))(
		createImage(`http://openweathermap.org/img/wn/${hourly_.weather[0].icon}@2x.png`)([
			'hourly',
			'hourly-icon',
		])(`icon representing ${hourly_.weather[0].description}`)(`${description}`)
	)

	pipe(
		addTextToElem(`${hourly_.weather[0].description}`),
		appendElemToParent(hourlyCard)
	)(elemCreator('h5')(['hourly', 'hourly-desc']))

	pipe(
		addTextToElem(`${Math.round(hourly_.temp)}°`),
		appendElemToParent(hourlyCard)
	)(elemCreator('h4')(['hourly', 'hourly-temp']))
}

export { renderHourlyCard }
