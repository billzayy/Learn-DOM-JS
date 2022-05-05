const api = [
    {
        id: 01,
        name: "Phan Le Tuan",
        job: "Software Engineer",
        picture: './img/Bill.jpeg',
        content: 'TAP Leader',
    },
    {
        id: 03,
        name: "Nguyen Xuan Anh",
        job: "Mobile Developer",
        picture: './img/Xuan Anh.jpeg',
        content: 'TAP Team',
    },
    {
        id: 04,
        name: "Bui Xuan Phuoc",
        job: "Mobile Developer",
        picture: './img/Xuan Phuoc.jpeg',
        content: 'TAP Team',
    }
];

const pic = document.querySelector('.pic-box');
const nameBox = document.querySelector('.name-box');
const job = document.querySelector('.job-box');
const content = document.querySelector('.content-box');

const prevBtn = document.querySelector('.previous-arrow');
const nextBtn = document.querySelector('.next-arrow')
const randomBtn = document.querySelector('.random-box')

let current = 0;

window.addEventListener("DOMContentLoaded", () => { 
    showPerson(current);
    prevBtn.addEventListener('click', () => {
        current--;
        if (current < 0) {
            current = api.length - 1
        }
        showPerson(current)
    });

    nextBtn.addEventListener('click', () => {
        current++;
        if (current > api.length - 1) {
            current = 0
        }
        showPerson(current)
    });
    randomBtn.addEventListener('click', () => { 
        const random = Math.floor(Math.random() * api.length);
        showPerson(random)
    })
})

function showPerson(current) { 
    const item = api[current];

    pic.src = item.picture;
    nameBox.textContent = item.name;
    job.textContent = item.job;
    content.textContent = item.content;
}
