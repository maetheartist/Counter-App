// always to remember to target the element and then next is to use the element.
const counterNumber = document.querySelector('.counter-number');
//target the btn plus button
const buttonPlus = document.querySelector('.btn-plus');

//target the btn reset button
const btnReset = document.querySelector('.btn-reset')

//body div
const counterEl = document.querySelector('.counter')

//counter title
const counterTitle = document.querySelector('.counter-title')

const darkButton = document.querySelector('.dark-mode')
const lightButton = document.querySelector('.light-mode')
const body = document.querySelector('body')

//listen for aclick event
// buttonPlus.addEventListener('click', function() {
//     //get me the current counter value
//     const currentValue = counterNumber.textContent
//     //convert the currentValue to real number
//     const currentNumber = Number(currentValue)
//     //inreament the currentValue by 1 each time a user clicks
//     const newValue = currentNumber + 1

//     counterNumber.textContent = newValue
// });

const incrementCounter = () => {
    const currentValue = counterNumber.textContent
    const realNumber = Number(currentValue)
    let newValue = realNumber + 1
    //check if new value is greater than 5
    if (newValue > 5) {
        newValue = 5
        //give visual indication that limit has been reached
        // const counterEl = document.querySelector('.counter')

        // counterEl.style.backgroundColor = 'red';
        counterEl.classList.add('counter--limits')

        //update or set counter title and say limit has been reached
        // const counterTitle = document.querySelector('.counter-title')
        counterTitle.textContent = 'Limit! Please buy the pro version';
        
        
        //Disable btn plus and btn minus
        buttonPlus.disabled = true
        buttonMinus.disabled = true

        buttonPlus.style.color = '#223105'
        buttonMinus.style.color = '#223105'
    }

    counterNumber.textContent = newValue
};

buttonPlus.addEventListener('click', incrementCounter);

//target the btn minus button
const buttonMinus = document.querySelector('.btn-minus');

buttonMinus.addEventListener('click', function() {
    currentValue = counterNumber.textContent
    currentNumber = Number(currentValue)
    let newValue = currentNumber - 1
    //checking for negative value
    if(newValue < 0) {
        newValue = 0
    }

    counterNumber.textContent = newValue
});


btnReset.addEventListener('click', function() {
    counterNumber.textContent = 0
    buttonPlus.disabled = false
    buttonMinus.disabled = false

    buttonPlus.style.color = 'rgb(142, 230, 10)'
    buttonMinus.style.color = 'rgb(142, 230, 10)'

    counterEl.classList.remove('counter--limits')
    counterTitle.textContent = 'Counter App'

});

//increasing the counter by pressing any key
// document.addEventListener('keydown', function() {
//     currentValue = counterNumber.textContent
//     realNumber = Number(currentValue)
//     newValue = realNumber + 1

//     counterNumber.textContent = newValue
// })

// document.addEventListener('keydown', incrementCounter);


darkButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    darkButton.textContent = 'Light'
    if (body.classList.contains('dark') === false) {
        darkButton.textContent = 'Dark'
    }
})
