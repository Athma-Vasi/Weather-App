import { navGeoLocation } from './components/navGeoLocation'
import { searchCityForm } from './components/searchCityForm'

const mainApp = function () {
	searchCityForm()
	navGeoLocation()
}

document.addEventListener('DOMContentLoaded', mainApp)
