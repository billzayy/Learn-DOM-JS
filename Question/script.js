const plusBtn = document.querySelectorAll('.plus-icon');
const minusBtn = document.querySelectorAll('.minus-icon');
const card = document.querySelectorAll('.card');
const showContent = document.querySelector('.show-content');
const parentElement = document.querySelectorAll('.card-contain')

for (let i = 0; i < card.length; i++) {
    plusBtn[i].addEventListener('click', () => { 
        card.forEach(item => { 
            const btnPlus = item.firstElementChild.lastElementChild.firstElementChild;
            const btnMinus = item.firstElementChild.lastElementChild.lastElementChild
            
            btnPlus.classList.add('hide-icon');
            btnMinus.classList.remove('hide-icon')
            card[i].classList.add('show-content')

            if (item !== card[i]) { 
                btnPlus.classList.remove('hide-icon')
                btnMinus.classList.add('hide-icon')
                item.classList.remove('show-content')
            }
        })
    })
    minusBtn[i].addEventListener('click', () => { 
        plusBtn[i].classList.remove('hide-icon');
        minusBtn[i].classList.add('hide-icon')
        card[i].classList.remove('show-content')
    })
}

