/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

function includesElement(array, element) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
		if (array[i] === element) {
			return true;
		}
	}
	return false;
}
let myArray = [6,1,2,2,3,4,2];
let element = includesElement(myArray, 3);
console.log(element)


/*
function includesElement(array, element) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
		if (element !== array[i]) {
			result.push(array[i]);

		}

	}
	return result;
}
const myArray = [6,1,2,2,3,4,2];
let element = includesElement(myArray, 3);
console.log(element)*/
