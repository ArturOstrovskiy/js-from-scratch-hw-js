/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
	let array = array1+array2;
	let result = [];
	for (let i = 0; i < array.length; i++) {

		result.push(array1[i]);
	}

}
	let findCommonElement = findCommonElements([1,2,3], [1,2,3]);
	console.log('findCommonElement ' + findCommonElement)


	function includesElement(array, element) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === element) {
				return true;
			}
		}
		return false;
	}

/*
const myArray = [6,1,2,2,3,4,2];
let element = includesElement(myArray, 3);
console.log(element)*/
