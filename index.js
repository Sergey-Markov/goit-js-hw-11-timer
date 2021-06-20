
const refs = {
    daysEl: document.querySelector('[data-value=days]'),
    hoursEl: document.querySelector('[data-value=hours]'),
    minsEl: document.querySelector('[data-value=mins]'),
    secsEl: document.querySelector('[data-value=secs]'),
};

const timer = {
    start(){
        const expectedDate = new Date(2022, 1, 1);
        setInterval(() => {
            
            calculateDate(expectedDate)
            
            
        }, 1000);
    },
};

function calculateDate (expectedDate) {
    const currentTime = Date.now();
    const timeLeft = expectedDate - currentTime;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((timeLeft % (1000 * 60)) / 1000)); 
    
    console.log(timeLeft);

    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minsEl.textContent = mins;
    refs.secsEl.textContent = secs;
};

function pad (value){
    return String(value).padStart(2, 0);
} 
timer.start();
// function CountdownTimer({selector, targetDate}){
//     this.selector = selector;
//     this.targetDate = targetDate;

//  
// };

// const firstTimer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2022'),
//   });
