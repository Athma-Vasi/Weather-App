import { showSlides } from './showSlides'

const showDailyCarouselLeft = function (this: HTMLButtonElement, ev: MouseEvent) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	if (!localStorage.getItem('dailySlideIndex')) {
		localStorage.setItem('dailySlideIndex', JSON.stringify(1))
	}

	let dailySlideIndex = JSON.parse(localStorage.getItem('dailySlideIndex'))

	dailySlideIndex--

	localStorage.setItem('dailySlideIndex', JSON.stringify(dailySlideIndex))

	log(dailySlideIndex)

	showSlides(dailySlideIndex)
}
export { showDailyCarouselLeft }
