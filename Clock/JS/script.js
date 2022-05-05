function Clock() { 
    const hourBox = document.querySelector(".hour-box"),
        minuteBox = document.querySelector(".minute-box"),
        secondBox = document.querySelector(".second-box");

    setInterval(() => {
        let hourClock = new Date().getHours();
        let minuteClock = new Date().getMinutes();
        let secondClock = new Date().getSeconds();

        hourClock = (hourClock < 10) ? "0" + hourClock : hourClock;
        minuteClock = (minuteClock < 10) ? "0" + minuteClock : minuteClock;
        secondClock = (secondClock < 10) ? "0" + secondClock : secondClock;

        hourBox.innerHTML = hourClock + " : ";
        minuteBox.innerHTML = minuteClock + " : ";
        secondBox.innerHTML = secondClock;
    }, 1000)
}

Clock()