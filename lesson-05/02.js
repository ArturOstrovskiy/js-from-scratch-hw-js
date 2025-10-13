/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(objectName ,creation, author) {
	if (Object.hasOwn(objectName, creation)){
		if  (objectName[creation] !== author){
			objectName[creation] = author
			console.log(objectName)
		}
	}		else {
		objectName[creation] = author;
		console.log(objectName)
	}
}
updateGallery(gallery, 'Mona sadLisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'Mona sadLisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')




// const arr = Object.entries(gallery)
// console.log(arr[0])
// arr[0]
// console.log(creationArray[0])


// const creationKeys = Object.keys(gallery);
// const authorValues = Object.values(gallery);
// console.log(creationKeys,authorValues)
// for (let author in gallery){
// 	console.log(gallery[author]);
// }

// if (gallery.hasOwnProperty(creation)){
// 	console.log();
// 	console.log()
// }

/*
function updateGallery(objectName ,creation, author, upDateValue) {
	if (Object.hasOwn(objectName, creation) && gallery[creation] === author){
		gallery[creation] = gallery[creation] + ' ,' + upDateValue
		console.log(gallery)*/
// if (!Object.hasOwn(objectName, creation))


// console.log(Object.values(objectName))
// console.log(gallery[creation])