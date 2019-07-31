console.log('js file loaded');



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('messageOne');
const messageTwo = document.getElementById('messageTwo');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data)=> {
        messageOne.textContent = data.address;
        messageTwo.textContent = data.forecast.forecast;
    })
})
.catch((error) => {
    messageOne.textContent = error;
    messageTwo.textContent = '';
});
})