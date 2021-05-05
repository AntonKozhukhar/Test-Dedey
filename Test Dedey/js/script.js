const form = document.forms.form;

form.addEventListener('submit', function (e) {
	e.preventDefault();
});


//Selects
const selects = document.querySelectorAll('select');

for (let i = 0; i < selects.length; i++) {
  const select = selects[i];
  for (let day = 2; day <= 31; day++) {
    select.innerHTML += `
    <option>${day} Мая</option>
    `;
  }
}


//Inputs
const inputs = document.querySelectorAll('input[type="number"]');
const buttonsUp = document.querySelectorAll('.up');
const buttonsDown = document.querySelectorAll('.down');

for (let i = 0; i < buttonsUp.length; i++) {
	const btnUp = buttonsUp[i];
	const btnDown = buttonsDown[i];
  const input = inputs[i];
  
  btnUp.classList.add('_active');
  

  btnUp.addEventListener('click', function () {
    if (input.value < 9) {
      input.value++;
      btnUp.classList.add('_active');
    }
    if (input.value > 8 ) {
      btnUp.classList.remove('_active');
    }
    if (input.value > 0) {
      btnDown.classList.add('_active');
    }
	});
  btnDown.addEventListener('click', function () {
    if (input.value > 0) {
      input.value--;
    }
    if (input.value < 1) {
      btnDown.classList.remove('_active');
    }
    if (input.value < 9) {
      btnUp.classList.add('_active');
    }
	});
}

