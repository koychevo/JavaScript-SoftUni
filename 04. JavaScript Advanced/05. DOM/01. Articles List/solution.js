function createArticle() {
	let articleSection = document.getElementById('articles');
	let title = document.getElementById('createTitle');
	let content = document.getElementById('createContent');
	let article = document.createElement('article');
	if (title.value.trim() !== '' && content.value.trim() !== '') {
		let h3 = document.createElement('h3');
		h3.textContent = title.value;
		let p = document.createElement('p');
		p.textContent = content.value;
		article.appendChild(h3);
		article.appendChild(p);
		articleSection.appendChild(article);
		title.value = '';
		content.value = '';
	}
}

/*
Task: In this problem, you should create a JS functionality which creates articles and appends them into some article section.
The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads.
Scripts are provided and executed as a plain text. They don't need a special preparation or a compilation to run.
In this aspect, JavaScript is very different from another language called Java.
Constraints:
•	Title value from the title input should be a heading 3 element <h3>
•	Content text from the textarea element should be a paragraph <p>
•	Both new created elements (h3 and p) should be appended to a new article element <article>
•	The current article element should be appended to the section which has an id articles (#articles)
•	You should create new article element only if title and content are not empty
•	After the button is pressed you must clear the title value and text value
*/
