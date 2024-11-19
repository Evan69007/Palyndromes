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

function isPalyndrome(str)
{
	if (str.length < 2)
	{
		return (true)
	}
	let i = 0
	let y = str.length - 1
	while(i < str.length / 2)
	{
		if (str.charAt(i) != str.charAt(y))
		{
			return (false)
		}
		i++
		y--
	}
	return (true)
}

function isDatePalyndrome(Date)
{
	let str
	if (!isValidDate(Date))
	{
		return (false)
	}
	str = Date.slice(0, 2) + Date.slice(3, 5) + Date.slice(6, 10)
	return (isPalyndrome(str))
}

function getNextPalyndromes(nb)
{
	let i = 0
	const today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth() + 1; // Months start at 0!
	let day = today.getDate();

	if (day < 10) 
	{
		day = '0' + day;
	}
	if (month < 10)
	{
		month = '0' + month;
	}

	let formattedToday = day + '/' + month + '/' + year;
	while(i < nb)
	{
		while(!isDatePalyndrome(formattedToday))
		{
			if (day == maxDaysInMonth(month, formattedToday.slice(6, 10)))
			{
				day = "01"
				if (month == "12")
				{
					month = "01"
					year++
				}
				else
				{
					month++
				}
			}
			else
			{
				day++
			}
			formattedToday = day + '/' + month + '/' + year;
		}
		console.log(formattedToday);
		i++
		if (day == maxDaysInMonth(month, formattedToday.slice(6, 10)))
			{
				day = "01"
				if (month == "12")
				{
					month = "01"
					year++
				}
				else
				{
					month++
				}
			}
		else
		{
			day++
		}
		formattedToday = day + '/' + month + '/' + year;
	}
}