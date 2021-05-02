$(document).ready(function() {
	const $paragraph = $('article p'),
		$article = $('article'),
		content = $('article p').text(),
		pLength = $('#readmore').outerHeight(),
		articleHeight = $('article').outerHeight();

	if (pLength > articleHeight) {
		$paragraph.html(content.substring(0, 410));
		$paragraph.append('<span class="readmore"> ... Lire la suite </span>');

		$('article .readmore').click(function() {
			$article.css({
				transition: 'height 1s',
				height: pLength + 'px'
			});
			$paragraph.html(content);
		});
	}
});