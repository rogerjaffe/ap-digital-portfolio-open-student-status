$(document).ready(function() {
	setTimeout(poll, 300);
});
var pollCount = 0, maxPoll = 10;
var poll = function() {
	let b = document.getElementsByClassName('cb-expand-button');
	if (b.length > 0) {
		b[0].click();
		pollCount == 10;
	} else {
		if (pollCount < maxPoll) {
			setTimeout(poll, 300);
		}
	}
	pollCount++;
}