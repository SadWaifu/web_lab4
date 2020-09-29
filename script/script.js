function increment() {
	var counter = document.getElementById('counter_id');
	counter.innerHTML = +counter.innerHTML + 1;
}

function decrement() {
	var counter = document.getElementById('counter_id');
	counter.innerHTML = +counter.innerHTML - 1;
}

function reset() {
	var counter = document.getElementById('counter_id');
	counter.innerHTML = 1;
	counter.style.color = "000000";
	
	// Сброс элемента списка и поля для ввода
	document.getElementById('input_id').value = 
		document.getElementById('math_sel').selectedIndex = 0;
}

function set_color(_color) {
	var counter = document.getElementById('counter_id');
	counter.style.color = _color;
}

function equal() {
	var counter = document.getElementById('counter_id'), 	// Основной счётчик (span)
	num = +document.getElementById('input_id').value; 		// Число из поля для ввода
	
	// Индекс выбранного элемента списка
	switch(document.getElementById('math_sel').selectedIndex) {
		case 0: return (counter.innerHTML = +counter.innerHTML + num);
		case 1: return (counter.innerHTML = +counter.innerHTML - num); 
		case 2: return (counter.innerHTML = +counter.innerHTML * num); 
		case 3: {
			if(!num) {
				alert("На 0 нельзя делить"); 
				break;
			}
			
			return (counter.innerHTML = +counter.innerHTML / num); 
		}
	}
}