import { showSlides } from './showSlides'

const showDailyCarouselLeft = function (this: HTMLButtonElement, ev: MouseEvent) {
	if (!localStorage.getItem('dailySlideIndex')) {
		localStorage.setItem('dailySlideIndex', JSON.stringify(1))
	}

	let dailySlideIndex = JSON.parse(localStorage.getItem('dailySlideIndex'))

	dailySlideIndex--

	localStorage.setItem('dailySlideIndex', JSON.stringify(dailySlideIndex))

	showSlides(dailySlideIndex)
}
export { showDailyCarouselLeft }
