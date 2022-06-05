import { Daily } from '../utilities/types'
import {
	elemCreator,
	appendElemToParent,
	addTextToElem,
	createImage,
	pipe,
} from '../utilities/element-creators'
import { showSlides } from '../events/showSlides'

const renderDailyCard = function (
	daily_: Daily,
	container_: HTMLElement,
	index_: number
) {
	const now = new Date()
	const day_ = now.getDay()

	const daysMap = new Map([
		[0, 'Sunday'],
		[1, 'Monday'],
		[2, 'Tuesday'],
		[3, 'Wednesday'],
		[4, 'Thursday'],
		[5, 'Friday'],
		[6, 'Saturday'],
	])

	//capitalizes first letters of phrase
	const description = daily_.weather[0].description.split(' ').reduce((acc, curr) => {
		curr = curr[0].toUpperCase() + curr.slice(1)
		acc = `${acc} ${curr}`
		return acc
	}, '')

	const li = elemCreator('li')(['daily', `daily-li${index_}`])
	appendElemToParent(container_)(li)

	const dailyCard = elemCreator('div')(['daily', 'daily-card', 'slides', 'fade'])
	appendElemToParent(li)(dailyCard)

	pipe(
		addTextToElem(
			`${day_ + index_ < 7 ? daysMap.get(day_ + index_) : daysMap.get(day_ + index_ - 7)}`
		),
		appendElemToParent(dailyCard)
	)(elemCreator('h5')(['daily', 'daily-day']))

	pipe(
		addTextToElem(`High: ${Math.round(daily_.temp.max)}°`),
		appendElemToParent(dailyCard)
	)(elemCreator('h5')(['daily', 'daily-high']))

	pipe(
		addTextToElem(`Low: ${Math.round(daily_.temp.min)}°`),
		appendElemToParent(dailyCard)
	)(elemCreator('h5')(['daily', 'daily-low']))

	pipe(appendElemToParent(dailyCard))(
		createImage(`http://openweathermap.org/img/wn/${daily_.weather[0].icon}@2x.png`)([
			'daily',
			'daily-icon',
		])(`icon representing ${daily_.weather[0].description}`)(`${description}`)
	)

	pipe(
		addTextToElem(`${description}`),
		appendElemToParent(dailyCard)
	)(elemCreator('h5')(['daily', 'daily-desc']))

	//sets the initial slide index
	const setIndex = (() => {
		if (!localStorage.getItem('dailySlideIndex')) {
			localStorage.setItem('dailySlideIndex', JSON.stringify(1))
		}

		let dailySlideIndex = JSON.parse(localStorage.getItem('dailySlideIndex'))

		showSlides(dailySlideIndex)
	})()
}
export { renderDailyCard }
