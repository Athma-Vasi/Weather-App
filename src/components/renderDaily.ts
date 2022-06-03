import { appendElemToParent, elemCreator } from '../utilities/element-creators'
import { DailyArr, Div } from '../utilities/types'

const renderDaily = function (daily_: DailyArr) {
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

	const dailyContainer: Div = document.querySelector('.dailyContainer')

	//remove previously rendered content
	const dailyContainerChild = document.querySelector('.dailyContainerInner')
	if (dailyContainerChild) dailyContainerChild.remove()

	//render new content
	const dailyContainerInner = elemCreator('div')(['dailyContainerInner'])
	appendElemToParent(dailyContainer)(dailyContainerInner)
}
export { renderDaily }
