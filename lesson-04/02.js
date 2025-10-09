/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

/*function findUniqueElements(array) {
	const uniqueElement = new Set(array);
	const uniqueArray = Array.from(uniqueElement);
return uniqueArray
}

const myArray = [6,1,2,2,3,4,2];

const findUniqueElement = findUniqueElements(myArray)
console.log('findUniqueElement ' + findUniqueElement)*/

function findUniqueElements(array) {
let result = [];
for (let i = 0; i < array.length; i++) {
	if (includesElement(result,array[i])) { //если в условии false, то выполняется то, что находится после if, а именно "result.push(array[i]);"
		continue //если в условии true, то выполняется continue и данная итерация цикла завершается, и выполняется следующая итерация цикла
	}
	result.push(array[i]);// пушится в новый массив result = []
}return result;//функция  findUniqueElements возвращает значение result
}


const myArray = [6,1,2,2,3,4,2];
const findUniqueElement = findUniqueElements(myArray)
console.log('findUniqueElement ' + findUniqueElement)

function includesElement(array, element) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === element) {
			return true;
		}
	}
	return false;
}