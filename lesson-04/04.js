/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

// function doubleEachCharacter(array) {
// 	let doubled = [];                                     // в начале тут пусто, но с каждой итерацией цикла значение doubled будет перезаписываться
// 	for (let i = 0; i < array.length; i++) {              // при первой итерации возьмется пустой doubled и к нему прибавятся два первых значения индекса array[i] ("h") массива array, после чего doubled присвоится значение пустого doubled + два значения array[i] и мы получим hh
// 		doubled = doubled + (array[i] + array[i]);          // doubled после = нужен, чтобы при каждом проходе цикла doubledString не переписывался заново, а к нему добавлялось новое значение (array[i] + array[i])
// 	}
// 	return doubled;
// }



function doubleEachCharacter(array) {
	let doubled = [];

	for (let i = 0; i < array.length; i++) {
		let leter = array[i] + array[i];
		doubled.push(leter);
	}
	return doubled = doubled.toString();
}

myArray = 'hello';

let double = doubleEachCharacter(myArray);
console.log(double)