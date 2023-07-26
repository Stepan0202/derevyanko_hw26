
'use strict'
const alert = document.querySelector("#myFirstAlert");
const alertButton = document.querySelector("#myFirstAlertToggler");
const myBD = moment("02 02 1993").format('Do MMMM YYYY');
const myBDcontainer = document.querySelector('#myBD');
const userBDForm = document.querySelector('#userBirthForm');

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-type="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

alertButton.addEventListener('click', toggleAlert)
function toggleAlert(){
    alert.classList.toggle('fade');
}
userBDForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target['userBirth'];
    const userBD = input.value;
    const userformattedField = document.querySelector('#userFormattedBD');
    const testPattern = /[0-3][0-9]\.[0-1][0-9]\.[2-9][0-9]/gm;
    const isWrightFormat = testPattern.test(userBD);
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');

    if(isWrightFormat){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        const data = userBD.split('.');
        console.log(data);
        userformattedField.innerHTML = moment(`${data[1]}.${data[0]}.${data[2]}`).format('Do MMMM YYYY')
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        userformattedField.innerHTML = "Input your birthday in wright format. Give a valid date — date like «13.45.45» is wrong. Also we don`t belive you if your birth year is less than 1920";
    }
    

})
myBDcontainer.innerHTML = myBD;