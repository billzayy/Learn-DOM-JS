const colorValue = document.querySelector('.color-value'),
    btnColor = document.querySelector('.btn-color'),
    backgroundColor = document.querySelector('body');

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

setInterval(() => { 
    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
        hexColor += arr[Math.floor(Math.random() * arr.length)]
    }

    colorValue.innerHTML = hexColor
    backgroundColor.style.backgroundColor = hexColor
}, 1000)

// btnColor.addEventListener('click', () => { 
//     let hexColor = "#"

//     for (let i = 0; i < 6; i++) {
//         hexColor += arr[Math.floor(Math.random() * arr.length)]
//     }

//     colorValue.innerHTML = hexColor
//     backgroundColor.style.backgroundColor = hexColor
// })

