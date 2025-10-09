/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(array) {
	let doubledString = '';
	for (let i = 0; i < array.length; i++) {
		doubledString = doubledString + (array[i] + array[i]); // doubledString после = нужен, чтобы при каждом проходе цикла doubledString не переписывался заново, а к нему добавлялось новое значение (array[i] + array[i])
	}
	return doubledString;
}

myArray = 'hello';

let double = doubleEachCharacter(myArray);
console.log(double)