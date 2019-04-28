let viewOpen = false;
$(document).ready(function() {
	setTimeout(poll, 1000);
});
var poll = function() {
	let b = document.getElementsByClassName('cb-expand-button');
	if (b.length > 0) {
		let url = document.location.href;
		if (url.indexOf('#instruction') >= 0) {
			if (!viewOpen) {
				b[0].click();
				viewOpen = true;				
			}
		} else {
			viewOpen = false;
		}
	} else {
		viewOpen = false;
	}
	setTimeout(poll, 1000);
}