import { searchCityForm } from './components/searchCityForm'

const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i, '\n')

	searchCityForm()
}

document.addEventListener('DOMContentLoaded', mainApp)
