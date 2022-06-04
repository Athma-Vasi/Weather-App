import { Daily } from '../utilities/types'
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
import { showSlides } from '../events/showSlides'

const renderDailyCard = function (
	daily_: Daily,
	container_: HTMLElement,
	index_: number
) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	const tempDaily = {
		dt: 1654254000,
		sunrise: 1654228066,
		sunset: 1654286990,
		moonrise: 1654237920,
		moonset: 1654211880,
		moon_phase: 0.12,
		temp: { day: 21.39, min: 10.47, max: 22.1, night: 16.2, eve: 18.96, morn: 11.13 },
		feels_like: { day: 20.63, night: 15.52, eve: 18.27, morn: 10.54 },
		pressure: 1017,
		humidity: 40,
		dew_point: 7.04,
		wind_speed: 5.72,
		wind_deg: 68,
		wind_gust: 12.78,
		weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
		clouds: 12,
		pop: 0.08,
		uvi: 6.36,
	}

	const toDateTime = (secs: number) => {
		const t = new Date(1970, 0, 1) //epoch
		t.setSeconds(secs)
		return t
	}

	let now = toDateTime(daily_.dt)
	let day_ = now.getDay()
	log(day_)

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
