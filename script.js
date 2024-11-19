function maxDaysInMonth(month, year)
{
	const end_year = year.slice(2, 4)
	if (month == "01" || month == "03" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12")
	{
		return (31)
	}
	else if (month == "02")
	{
		if (end_year == "00" || end_year % 4 == 0)
		{
			return (29)
		}
		else
		{
			return (28)
		}
	}
	else
	{
		return (30)
	}
}

function isValidDate(Date) {
	let day
	let month
	let year
	let nb_max_day
	if (Date.length !== 10)
	{
		return (false)
	}
	day = Date.slice(0, 2)
	month = Date.slice(3, 5)
	year = Date.slice(6, 10)
	nb_max_day = maxDaysInMonth(month, year)
	if (Date.charAt(2) !== '/' || Date.charAt(5) !== '/')
	{
		return (false)
	}
	if (month > "12" || month < "01")
	{
		return (false)
	}
	if (day < "01" || day > nb_max_day)
	{
		return (false)
	}
	if (year < "1000" || year > "9999")
	{
		return (false)
	}
	return (true)
}

console.log(isValidDate("28/02/1000"));