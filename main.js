const countwords = () => {
	let noc = document.getElementById('words').value.length;

	let now = document.getElementById('words').value;
	now = now.match(/\w+/g);
	now = now.length;

	let nos = document.getElementById('words').value;
	nos = nos.split(/[.|!|?]/g);
	nos = nos.length - 1;

	document.getElementById('showdata').innerHTML = 'Total Characters = ' + noc;

	document.getElementById('showwordscount').innerHTML = 'Total words = ' + now;

	document.getElementById('showsentencecount').innerHTML =
		'Total Sentences = ' + nos;
};
