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

const renderHourlyCard = function (
	hourly_: Hourly,
	container_: HTMLElement,
	index: number,
	hours_: number
) {
	const description = hourly_.weather[0].description.split(' ').reduce((acc, curr) => {
		curr = curr[0].toUpperCase() + curr.slice(1)
		acc = `${acc} ${curr}`
		return acc
	}, '')

	const li = elemCreator('li')(['hourly', `li${index}`])
	appendElemToParent(container_)(li)

	const hourlyCard = elemCreator('div')(['hourly', 'hourly-card'])
	appendElemToParent(li)(hourlyCard)

	//TODO: broken, fix this logic
	pipe(
		addTextToElem(
			`${hours_ + index < 12 ? hours_ + index + 'AM' : hours_ + index - 12 + 'PM'}`
		),
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
