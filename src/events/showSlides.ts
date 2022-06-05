import { NodesLi } from '../utilities/types'

const showSlides = function (index: number) {
	const slides: NodesLi = document.querySelectorAll('.daily-ul li')

	let dailySlideIndex = JSON.parse(localStorage.getItem('dailySlideIndex'))

	//loop around
	if (index >= slides.length) {
		dailySlideIndex = 1
		localStorage.setItem('dailySlideIndex', JSON.stringify(1))
	}

	if (index < 1) dailySlideIndex = slides.length
	slides.forEach((slide) => {
		slide.style.display = 'none'
	})

	slides[dailySlideIndex - 1].style.display = 'block'
}

export { showSlides }
