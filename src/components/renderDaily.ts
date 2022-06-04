import { appendElemToParent, elemCreator } from '../utilities/element-creators'
import { DailyArr, Div } from '../utilities/types'
import { renderDailyCard } from './renderDailyCard'

const renderDaily = function (dailyArr_: DailyArr) {
	const log = (i: unknown) => console.log('\n', i, '\n')

	const now = new Date()
	let day = now.getDay()

	const dailyContainer: Div = document.querySelector('.dailyContainer')

	//remove previously rendered content
	const dailyContainerChild = document.querySelector('.dailyContainerInner')
	if (dailyContainerChild) dailyContainerChild.remove()

	//render new content
	const dailyContainerInner = elemCreator('div')(['dailyContainerInner'])
	appendElemToParent(dailyContainer)(dailyContainerInner)

	const ul = elemCreator('ul')(['daily', 'carousel-ul'])
	appendElemToParent(dailyContainerInner)(ul)

	dailyArr_.forEach((daily, index) => {
		renderDailyCard(daily, ul, index, day)
	})
}
export { renderDaily }
