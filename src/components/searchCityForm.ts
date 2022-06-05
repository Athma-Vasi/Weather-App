import { handleSearchCitySubmit } from '../events/handleSearchCitySubmit'
import { Form } from '../utilities/types'

const searchCityForm = function () {
	const formSearchCity: Form = document.querySelector('#form-search-city')

	formSearchCity.addEventListener('submit', handleSearchCitySubmit)
}
export { searchCityForm }
