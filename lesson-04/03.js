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

/*function findCommonElements(array1, array2) {
	let result = [];
	for (let i = 0; i < array1.length; i++) {
if (!includesElement (array1,array1[i]) && !includesElement (array2,array2[i])) {
	continue
}
		console.log(array1[i], array2[i]);
		result.push(array1[i]);
	} return result;

}*/

function findCommonElements(array1, array2) {
	let result = [];

	for (let i = 0; i < array1.length; i++) {
		const el = array1[i];

		if (includesElement(array2, el)) { //сравниваем значения массива array1 с поочередным перебором индексов значений массива array2
			result.push(el);
		}
	}
	return result;
}


let findCommonElement = findCommonElements(['banana',1,6,2,5,3], [4,2,'banana',1]);
console.log('findCommonElement ', findCommonElement)


function includesElement(array, element) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === element) {
			return true;
		}
	}
	return false;
}