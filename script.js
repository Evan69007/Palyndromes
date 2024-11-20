function maxDaysInMonth(month, year)
{
	if (month == "01" || month == "03" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12")
	{
		return (31)
	}
	else if (month == "02")
	{
		if (year % 4 == 0)
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

function isValidDate(date)
{
	if (date.length != 10)
	{
		return (false)
	}
	if (date.charAt(2) != "/" || date.charAt(5) != "/")
	{
		return (false)
	}
	let dateArray = date.split("/")
	if (dateArray[0] < 1 || dateArray[0] > maxDaysInMonth(dateArray[1], dateArray[2]))
	{
		return (false)
	}
	let newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
	if (!new Date(newDate))
	{
		return (false)
	}
	return (true)
}

function cleanDate(date)
{
	const dateArray = date.split("/")
	return (dateArray.join(""))
}

function isPalyndrome(str)
{
	const strReverse = str.split("").reverse().join("")
	return (str == strReverse)
}

function isDatePalyndrome(date)
{
	if (!isValidDate(date))
		{
			return (false)
		}
	const dateClean = cleanDate(date)
	return (isPalyndrome(dateClean))
}

function getNextPalyndromes(nb)
{
	let i = 0
	const today = new Date();
	let day = today.getUTCDate().toString();
	let month = (today.getUTCMonth() + 1).toString(); // month start at 0
	let year = today.getUTCFullYear().toString();
	let date = day + '/' + month + '/' + year;
	let dateArray = date.split('/')
	while (i < nb)
	{
		while (!(isDatePalyndrome(date)))
		{
			if (day >= maxDaysInMonth(dateArray[1], dateArray[2]))
			{
				day = "01"
				if (month == 12)
				{
					month = "01"
					year++
				}
				else
				{
					month++
					if (month < 10)
					{
						month = '0' + month
					}
					else
					{
						month = month.toString()
					}
				}
			}
			else
			{
				day++
				if (day < 10)
				{
					day = '0' + day
				}
				else
				{
					day = day.toString()
				}
			}
			date = day + '/' + month + '/' + year;
			dateArray = date.split('/')
		}
		console.log(date);
		i++
		day++
		date = day + '/' + month + '/' + year;
		dateArray = date.split('/')
	}
}

getNextPalyndromes(8)