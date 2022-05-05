const barBtn = document.querySelector('.bars-btn ');
const removeBtn = document.querySelector('.remove-btn');
const card = document.querySelector('.card');

barBtn.addEventListener('click', () => { 
    card.classList.toggle('hide-card')
})

removeBtn.addEventListener('click', () => { 
    card.classList.toggle('hide-card')
})