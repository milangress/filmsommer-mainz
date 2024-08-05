import { DateTime } from 'luxon'

export function getTime(time) {
	return DateTime.fromISO(time).toFormat('HH:mm')
}

export function getDate(date) {
	const weekday = DateTime.fromISO(date).weekdayShort
	const day = DateTime.fromISO(date).toFormat('dd.MM')
	return `${weekday}, ${day}`
}

export function goToDate(event, date) {
	if (event.key && event.key !== 'Enter') return
	const el = document.querySelector(`#date-${date}`)
	if (!el) return
	el.scrollIntoView({
		behavior: 'smooth'
	})
}

export function isDateToday(date) {
	const today = DateTime.local()
	return DateTime.fromISO(date).toISODate() === today.toISODate()
}

export function isDatePast(date) {
	const today = DateTime.local()
	const thisDate = DateTime.fromISO(date)
	const diff = today.diff(thisDate, 'days').toObject().days
	return diff > 1 && diff < 20
}
