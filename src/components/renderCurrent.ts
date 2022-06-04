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
	//remove previously rendered contents
	const currentContainerChild = document.querySelector('.currentContainerInner')
	if (currentContainerChild) currentContainerChild.remove()

	//render new contents
	const currentContainerInner = elemCreator('div')(['current', 'currentContainerInner'])
	appendElemToParent(currentContainer)(currentContainerInner)

	pipe(
		addTextToElem(geoData_.name),
		appendElemToParent(currentContainerInner)
	)(elemCreator('h2')(['current', 'current-cityName']))

	pipe(
		addTextToElem(`${Math.round(current_.temp)}°`),
		appendElemToParent(currentContainerInner)
	)(elemCreator('h2')(['current', 'current-temp']))

	pipe(
		addTextToElem(description),
		appendElemToParent(currentContainerInner)
	)(elemCreator('h4')(['current', 'current-desc']))

	pipe(
		addTextToElem(`High: ${high}°`),
		appendElemToParent(currentContainerInner)
	)(elemCreator('h4')(['current', 'current-high']))

	pipe(
		addTextToElem(`Low: ${low}°`),
		appendElemToParent(currentContainerInner)
	)(elemCreator('h4')(['current', 'current-low']))
}
export { renderCurrent }
