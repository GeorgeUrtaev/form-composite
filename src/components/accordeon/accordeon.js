mainObj.accordeon =
{
	show(instance)
	{
		let accordeon = instance.closest('._accordeon')
		let content = accordeon.querySelector('._accordeonContent')
		let contentHeight = content.querySelector('._contentHeight')
		let arr = instance.querySelector('._accArr')
		if(content.classList.contains('show'))
		{
			content.classList.remove('show')
			arr.classList.remove('active')
			content.style.height = 0
		}
		else
		{
			content.classList.add('show')
			arr.classList.add('active')
			content.style.height = contentHeight.offsetHeight + 'px'
		}
	}
}
// _contentHeight