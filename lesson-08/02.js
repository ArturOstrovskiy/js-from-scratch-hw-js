/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
	// if(true && true) return true
	// !isNaN(str), то есть если str НЕ будет NaN, то будет true
	// Number(str), то есть если Number(str) сможет привести str в number, то будет true
	// Если срабатывает if, то выполняется return true
if(!isNaN(str) && Number(str)) return true;
	// Если if не срабатывает, то выполняется return false;
return false;
}


// console.log(isNumeric('123')) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
