const getHours = function (hours_: [number, string], index_: number) {
	let hours = ((hours_[0] + 11) % 12) + 1 + index_
	let hoursTime: string

	if (hours_[1] === 'PM') {
		if (hours <= 12) {
			hoursTime = `${hours} PM`
		}
		//hours >12
		else {
			//hours > 12 and <= 24
			if (hours <= 24) {
				hours = hours - 12
				hoursTime = `${hours} AM`
			}
			//hours > 24
			else {
				if (hours > 24 && hours <= 36) {
					hours = hours - 24
					hoursTime = `${hours} PM`
				} else if (hours > 36 && hours <= 48) {
					hours = hours - 36
					hoursTime = `${hours} AM`
				} else if (hours > 48 && hours <= 60) {
					hours = hours - 48
					hoursTime = `${hours} PM`
				}
			}
		}
	}
	return hoursTime
}
export { getHours }
