import { showDailyCarouselLeft } from '../events/showDailyCarouselLeft'
import { showDailyCarouselRight } from '../events/showDailyCarouselRight'
import {
	appendElemToParent,
	elemCreator,
	pipe,
	addEvtListener,
	addTextToElem,
} from '../utilities/element-creators'
import { DailyArr, Div } from '../utilities/types'
import { renderDailyCard } from './renderDailyCard'

const renderDaily = function (dailyArr_: DailyArr) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	const dailyContainer: Div = document.querySelector('.dailyContainer')

	//remove previously rendered content
	const dailyContainerChild = document.querySelector('.dailyContainerInner')
	if (dailyContainerChild) dailyContainerChild.remove()

	//render new content
	const dailyContainerInner = elemCreator('div')(['dailyContainerInner'])
	appendElemToParent(dailyContainer)(dailyContainerInner)

	const ul = elemCreator('ul')(['daily', 'daily-ul', 'slideshow-container'])
	appendElemToParent(dailyContainerInner)(ul)

	dailyArr_.forEach((daily, index) => {
		renderDailyCard(daily, ul, index)
	})

	//carousel nav buttons
	pipe(
		addTextToElem('<'),
		addEvtListener('click')(showDailyCarouselLeft),
		appendElemToParent(dailyContainerInner)
	)(elemCreator('button')(['daily', 'bttn-prev']))

	pipe(
		addTextToElem('>'),
		addEvtListener('click')(showDailyCarouselRight),
		appendElemToParent(dailyContainerInner)
	)(elemCreator('button')(['daily', 'bttn-next']))
}

export { renderDaily }
