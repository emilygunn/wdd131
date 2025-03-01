import {participantTemplate, successTemplate} from './Templates.js';

let count = 2
function participantCounter() {
    return count++;
}

function totalFees() {
    let feeElements = document.querySelectorAll('[id^=fee]');
    console.log(feeElements);
    feeElements = [...feeElements];

    return feeElements.reduce((total, fee) => {
        return total + Number(fee.value)
    }, 0);
}

document.querySelector('#add').addEventListener('click', function() {
    let count = participantCounter();
    console.log(count);

    this.insertAdjacentHTML('beforebegin', participantTemplate(count));
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const summaryInfo = {
        totalCost: totalFees(),
        adult: document.querySelector('#adult_name').value,
        numOfParticipants: count,
    }

    this.insertAdjacentHTML('afterend', successTemplate(summaryInfo));
    document.querySelector('form').style.display = "none";
})