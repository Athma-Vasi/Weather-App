import { handleSearchCitySubmit } from '../events/handleSearchCitySubmit'
import { Form } from '../utilities/types'

const searchCityForm = function () {
	const log = (i: unknown) => console.log('\n', i, '\n')

	const formSearchCity: Form = document.querySelector('#form-search-city')

	formSearchCity.addEventListener('submit', handleSearchCitySubmit)
}
export { searchCityForm }
