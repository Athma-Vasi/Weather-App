import { Current, Div, GeoData, Hourly, HourlyArr } from '../utilities/types'
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

const renderCurrent = function (
	geoData_: GeoData,
	current_: Current,
	hourly_: HourlyArr
) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	//to find the highs and lows
	const temperatures = hourly_.map((temp) => temp.temp).slice(0, 24)
	const high = Math.round(Math.max(...temperatures))
	const low = Math.round(Math.min(...temperatures))

	//capitalize the first letters of the phrase
	const description = current_.weather[0].description.split(' ').reduce((acc, curr) => {
		curr = curr[0].toUpperCase() + curr.slice(1)
		acc = `${acc} ${curr}`
		return acc
	}, '')

	const currentContainer: Div = document.querySelector('.currentContainer')

	pipe(
		addTextToElem(geoData_.name),
		appendElemToParent(currentContainer)
	)(elemCreator('h3')(['current', 'cityName']))

	pipe(
		addTextToElem(`${Math.round(current_.temp)}°`),
		appendElemToParent(currentContainer)
	)(elemCreator('h2')(['current', 'temperature']))

	pipe(
		addTextToElem(description),
		appendElemToParent(currentContainer)
	)(elemCreator('h4')(['current', 'description']))

	pipe(
		addTextToElem('High: '),
		appendElemToParent(currentContainer)
	)(elemCreator('h4')(['current', 'high-text']))

	pipe(
		addTextToElem(`${high}°`),
		appendElemToParent(currentContainer)
	)(elemCreator('h4')(['current', 'high-number']))

	pipe(
		addTextToElem(`Low: `),
		appendElemToParent(currentContainer)
	)(elemCreator('h4')(['current', 'low-text']))

	pipe(
		addTextToElem(`${low}°`),
		appendElemToParent(currentContainer)
	)(elemCreator('h4')(['current', 'low-number']))
}
export { renderCurrent }
