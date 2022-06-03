export type Form = HTMLFormElement | null
export type Div = HTMLDivElement | null

export type GeoData = {
	name: string
	lat: number
	lon: number
	country: string
	state: string
}

export type WeatherData = {
	lat: number
	lon: number
	timezone: string
	timezone_offset: number
	current: {
		dt: number
		sunrise: number
		sunset: number
		temp: number
		feels_like: number
		pressure: number
		humidity: number
		dew_point: number
		uvi: number
		clouds: number
		visibility: number
		wind_speed: number
		wind_deg: number
		weather: [{ id: number; main: string; description: string; icon: string }]
	}
	minutely: { dt: number; precipitation: number }[]
	hourly: {
		dt: number
		temp: number
		feels_like: number
		pressure: number
		humidity: number
		dew_point: number
		uvi: number
		clouds: number
		visibility: number
		wind_speed: number
		wind_deg: number
		wind_gust: number
		weather: [{ id: number; main: string; description: string; icon: string }]
		pop: number
	}[]
	daily: {
		dt: number
		sunrise: number
		sunset: number
		moonrise: number
		moonset: number
		moon_phase: number
		temp: {
			day: number
			min: number
			max: number
			night: number
			eve: number
			morn: number
		}
		feels_like: { day: number; night: number; eve: number; morn: number }
		pressure: number
		humidity: number
		dew_point: number
		wind_speed: number
		wind_deg: number
		wind_gust: number
		weather: [{ id: number; main: string; description: string; icon: string }]
		clouds: number
		pop: number
		uvi: number
	}[]
}

export type Current = WeatherData['current']
export type Minutely = WeatherData['minutely']
export type HourlyArr = WeatherData['hourly']
export type DailyArr = WeatherData['daily']
export type TimeZone = Pick<WeatherData, 'timezone' | 'timezone_offset'>

export type Hourly = {
	dt: number
	temp: number
	feels_like: number
	pressure: number
	humidity: number
	dew_point: number
	uvi: number
	clouds: number
	visibility: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: [{ id: number; main: string; description: string; icon: string }]
	pop: number
}

export type Daily = {
	dt: number
	sunrise: number
	sunset: number
	moonrise: number
	moonset: number
	moon_phase: number
	temp: {
		day: number
		min: number
		max: number
		night: number
		eve: number
		morn: number
	}
	feels_like: { day: number; night: number; eve: number; morn: number }
	pressure: number
	humidity: number
	dew_point: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: [{ id: number; main: string; description: string; icon: string }]
	clouds: number
	pop: number
	uvi: number
}
