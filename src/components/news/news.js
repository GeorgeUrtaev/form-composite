mainObj.news =   								// создали объект внутри mainObj с именем news
{                  								// начало тела объекта news
	item: document.querySelectorAll('._item'), // создали свойство (поле) с ключем item(массив) и значением document.querySelectorAll('._item'), получаем наши теги (3шт)
	move()										// создали метод с именем move
	{ 											// начало тела метода move
		for(let i = 1; i < this.item.length; i++) // создали цикл от 1 до количества тегов (3шт)
 		{                                          // начало тела цикла for
			let first = this.item[i].querySelectorAll('._wr')[0] // создали переменную first(массив), в котрой наши внутренние теги 1шт,2шт,2шт , а именно верхние
			this.item[i-1].innerHTML += first.innerHTML // записываем в предыдущий индекс массива текущие внутренности тега ('._wr')[0]
			first.remove()     							// удаляем текущие внутренности тега ('._wr')[0] 
		}												// конец тела цикла for
	}													// конец тела метода move
}														// конец тела объекта news