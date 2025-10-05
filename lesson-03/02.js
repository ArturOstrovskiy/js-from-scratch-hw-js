// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
	if (number % 2 === 0) {
		console.log(`Even: ${number}`)
		return true
	} else {
		console.log(`Odd: ${number}`)
		return false
	}
}

isEven(4)